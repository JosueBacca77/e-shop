import back from '../Images/back-ground.jpg';
import React, {useEffect, useState} from "react";
import './Home.css'
import '../../General.css'
import {LinearIndeterminate} from "../General/Progress";
import ArticleList from "../ArticleList";
import {getFireStore} from "../../Data";


const Home =()=> {

    const [articles, setArticles] = useState([])

    const data = getFireStore()

    const getArticles = () =>{
        data.collection('Articles').where('stock','>',0).limit(6).get()
            .then(arts => {
                let arr = [];
                arts.forEach(art => {
                    arr.push({
                        id: art.id,
                        data: art.data()
                    })
                })
                setArticles(arr)
            })
            .catch(error => console.log('Error en la búsqueda de productos de home: '+error))
    }

    useEffect(() => {
        getArticles();
    }, []);


/*    const getArticles = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(temporalArticles.slice(0,6));
        }, 2000)
    })*/

    return(
        <div className={articles.length>0?null:'container'} style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='main-view'>
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
