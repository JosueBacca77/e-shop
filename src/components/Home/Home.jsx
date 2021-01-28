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
    },[]);

    return(
        <div className={articles.length>0?null:'container'} style={{
            backgroundImage: `url(${`${'/Images/back-ground.jpg'}`})`,
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
