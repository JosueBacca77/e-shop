import React, {useEffect, useLayoutEffect, useState} from "react";
import {CircularIndeterminate} from "../General/Progress";
import {useParams} from 'react-router-dom'
import ArticleList from "../ArticleList";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import {errorStrings} from "../General/constants/strings";
import {getFireStore} from "../../Data";
import './../../General.css'


const Heading =()=> {

    const [waiting,setWaiting] = useState(true)
    const {name} = useParams();
    const db = getFireStore()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getHeadingArticles();
    }, [name]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getHeadingArticles = () =>{
        db.collection('Articles').where('heading','==',name).get()
            .then(arts => {
                let arr = [];
                arts.forEach(art => {
                    arr.push({
                        id: art.id,
                        data: art.data()
                    })
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
                waiting === false && articles.length ===0
                    ?
                    <ErrorPage text={errorStrings.headingArticlesNotFound}/>
                    :null
            }
        </div>
    )
}

export default Heading;