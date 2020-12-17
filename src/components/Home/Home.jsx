import '../CardsArticle/CartdArticle.css'
import back from '../Images/back-ground.jpg';
import CardArticle from "../CardsArticle/CardArticle";
import React, {useEffect, useState} from "react";
import {temporalArticles} from "../../constants/data";
import './Home.css'
import {LinearIndeterminate} from "../Progress";


const Home =()=> {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles.then(list => setArticles(list));
    }, []);


    const getArticles = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(temporalArticles);
        }, 2000)
    })

    return(
        <div className={articles.length>0?null:'container'} style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='home'>
            {articles.length>0
                ?
                <>
                    <h1 className='subtitle'>Lo más buscado</h1>
                    <div className='articles'>
                        {articles.map(article => (
                                <article>
                                    {<CardArticle
                                        article={article}
                                    />}
                                </article>
                            ))}
                    </div>
                </>
                :
                <LinearIndeterminate />
            }
            </div>
        </div>
    )
}

export default Home;
