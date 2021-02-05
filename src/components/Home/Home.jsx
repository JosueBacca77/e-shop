import React, {useEffect, useState} from "react";
import './Home.css'
import './../../General.css'
import {LinearIndeterminate} from "../General/Progress";
import ArticleList from "../ArticleList";
import {getFireStore} from "../../Data";


const Home =()=> {

    const [articles, setArticles] = useState([])

    const data = getFireStore()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        getArticles();
    },[]);

    const getArticles = () =>{
        data.collection('Articles').limit(6).get()
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

    return(
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
    )
}

export default Home;
