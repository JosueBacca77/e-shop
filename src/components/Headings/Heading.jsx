import React, {useEffect, useState} from "react";
import {LinearIndeterminate} from "../General/Progress";
import {useParams} from 'react-router-dom'
import ArticleList from "../ArticleList";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import {errorStrings} from "../General/constants/strings";
import {getFireStore} from "../../Data";



const Heading =()=> {

    const [waiting,setWaiting] = useState(true)
    const {name} = useParams();
    const db = getFireStore()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getHeadingArticles();

    }, [name]);

    const getHeadingArticles = () =>{
        db.collection('Articles').where('stock','>',0).where('heading','==',name).get()
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
        <div className={ waiting === false ?null:'container'} style={{
            backgroundImage: `url(${`${'/Images/back-ground.jpg'}`})`,
        }}>
            <div className='main-view'>
                {
                    waiting === true
                        ?
                        <LinearIndeterminate />
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
        </div>
    )
}

export default Heading;