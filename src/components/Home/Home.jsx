import back from '../Images/back-ground.jpg';
import React, {useEffect, useState} from "react";
import {temporalArticles} from "../../constants/data";
import './Home.css'
import {LinearIndeterminate} from "../Progress";
import ArticleList from "../ArticleList";


const Home =()=> {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles.then(list => setArticles(list));
    }, []);


    const getArticles = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(temporalArticles.slice(0,6));
        }, 2000)
    })

    return(
        <div className={articles.length>0?null:'container'} style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='home'>
            {articles.length>0
                ?
                <ArticleList
                    articles={articles}
                    title='Lo más buscado'
                />
                :
                <LinearIndeterminate />
            }
            </div>
        </div>
    )
}

export default Home;
