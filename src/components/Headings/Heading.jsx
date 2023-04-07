import React, {useEffect, useLayoutEffect, useState} from "react";
import {CircularIndeterminate} from "../General/Progress/Progress";
import {useParams} from 'react-router-dom'
import ArticleList from "../ArticleList";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import {errorStrings} from "../General/constants/strings";
import {getFireStore} from "../../Data";
import './../../General.css'
import { useArticleFilter } from "../../ArticleFilterContext";


const Heading =()=> {

    const [waiting,setWaiting] = useState(true)
    const {name} = useParams();
    const {filter} = useArticleFilter()
    const db = getFireStore()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getHeadingArticles(filter);
    }, [name, filter]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getHeadingArticles = (filter) =>{
        console.log('filter')
        console.log(filter)
        db.collection('Articles').where('heading','==',name).get()
            .then(arts => {
                let arr = [];
                arts.forEach(art => {
                    if (filter.length>0){
                        if (art.data().name.toLowerCase().includes(filter.toLowerCase())){
                            arr.push({
                                id: art.id,
                                data: art.data()
                            })
                        }
                    }else{
                            arr.push({
                            id: art.id,
                            data: art.data()
                        })
                    }
                })
                setArticles(arr)
                setWaiting(false)
            })
            .catch(error => console.log(`Error en la búsqueda de productos del rubro: ${name} , ${error}`))
    }

    return(
        <div className='main-view'>
            {
                waiting === true
                    ?
                    <CircularIndeterminate />

                    :
                    null
            }
            {
                articles.length>0 && waiting === false
                    ?
                    <ArticleList
                        articles={articles}
                        title={name}
                    />
                    :
                    null
            }
            {
                waiting === false && articles.length ===0 && filter.length===0
                    ?
                    <ErrorPage text={errorStrings.headingArticlesNotFound}/>
                    :null
            }
            {
                waiting === false && filter.length>0 && articles.length===0
                    ?
                    <ErrorPage text={errorStrings.noMatchSearch}/>
                    :null
            }
        </div>
    )
}

export default Heading;