import '../CardsArticle/CartdArticle.css'
import back from '../Images/back-ground.jpg';
import CardArticle from "../CardsArticle/CardArticle";
import React from "react";


const Home =({articles})=> {
    return(
        <div className='container' style={{
            backgroundImage: `url(${`${back}`})`,
            backgroundSize: 'cover',
        }}>
            <div className='home'>
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
            </div>
        </div>
    )
}

export default Home;
