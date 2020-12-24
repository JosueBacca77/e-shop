import React, {useEffect, useState} from "react";
import {temporalArticles} from "../../constants/data";
import ArticleDetail from "../ArticleDetail";
import {LinearIndeterminate} from "../../components/Progress";
import back from "../../components/Images/back-ground.jpg";


const ArticleDetailContainer =()=>{

    const [article, setArticle] = useState( {
        name: '',
        images: [],
        description: '',
        price: '',
        unit: '',
        stock: ''
    })

    useEffect(() => {
        getArticles.then(art => setArticle(art));
    }, []);


    const getArticles = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(temporalArticles[0]);
        }, 2000)
    })
    return(
        <div className={article.name!==''?null:'container'} style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='home'>
                {
                    article.name !== ''
                        ?
                        <ArticleDetail
                            article={article}
                        />
                        :
                        <LinearIndeterminate />
                }
            </div>
        </div>
    )
}

export default ArticleDetailContainer;