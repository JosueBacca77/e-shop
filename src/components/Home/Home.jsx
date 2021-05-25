import React, {useEffect, useLayoutEffect, useState} from "react";
import './Home.css'
import './../../General.css'
import {CircularIndeterminate} from "../General/Progress";
import ArticleList from "../ArticleList";
import {getFireStore} from "../../Data";
import {useArticleFilter} from "../../ArticleFilterContext";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import { errorStrings } from "../General/constants/strings";


const Home =()=> {

    const [articles, setArticles] = useState([])

    const data = getFireStore()

    const {filter} = useArticleFilter()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {

        getArticles(filter);
        
    },[filter]);

    const getArticles = (filter) =>{
        data.collection('Articles').get()
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
            })
            .catch(error => console.log('Error en la búsqueda de productos de home: '+error))
    }

    return(
        <div className='main-view'>
            {articles.length>0
                ?
                <ArticleList
                    articles={articles.slice(0,6)}
                    title='Lo más buscado'
                />
                :
                <>
                    {
                        filter.length>0
                        ?
                        <ErrorPage text={errorStrings.noMatchSearch}/>

                        :
                        <CircularIndeterminate />
                    }
                </>
                
            }
        </div>
    )
}

export default Home;
