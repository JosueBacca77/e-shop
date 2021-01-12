import React, {useEffect, useState} from "react";
import ArticleDetail from "../ArticleDetail";
import {LinearIndeterminate} from "../../General/Progress";
import back from "../../Images/back-ground.jpg";
import {getArticleById} from "../../../Data/GetData";
import {useParams} from 'react-router-dom'
import {errorStrings} from "../../General/constants/strings";
import ErrorPage from "../../General/ErrorPage/ErrorPage";


const ArticleDetailContainer =()=>{

    const {id} = useParams();
    const [waiting,setWaiting] = useState(true)
    const [article, setArticle] = useState( {
        name: '',
        images: [],
        description: '',
        price: '',
        unit: '',
        stock: ''
    })

    useEffect(() => {
        getArticles
            .then(
                function(art){
                    setArticle(art);
                    setWaiting(false)
                } );
    }, []);


    const getArticles = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(getArticleById(id));
        }, 2000)
    })
    return(
        <div className={ waiting ===false ?null:'container'} style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='main-view'>
                {
                    waiting ===true
                    ?
                        <LinearIndeterminate />
                        :
                        null
                }
                {
                      article.name !== undefined && waiting === false
                        ?
                        <ArticleDetail
                            article={article}
                        />
                        :
                          null
                }
                {
                    waiting === false && article.name ===undefined
                    ?
                        <ErrorPage text={errorStrings.articleNotFound}/>
                        :null
                }
            </div>
        </div>
    )
}

export default ArticleDetailContainer;