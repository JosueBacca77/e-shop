import React, {useEffect, useState} from "react";
import ArticleDetail from "../ArticleDetail";
import {LinearIndeterminate} from "../../General/Progress";
import back from "../../Images/back-ground.jpg";
import {getArticleById} from "../../../Data/GetData";
import {useParams} from 'react-router-dom'
import {errorStrings} from "../../General/constants/strings";
import ErrorPage from "../../General/ErrorPage/ErrorPage";
import {getFireStore} from "../../../Data";


const ArticleDetailContainer =()=>{

    const {id} = useParams();
    const db = getFireStore()
    const [waiting,setWaiting] = useState(true)
    const [article, setArticle] = useState( {
        name: '',
        images: [],
        description: '',
        price: '',
        unit: '',
        stock: ''
    })

    const getArticle =()=>{
        db.collection('Articles').doc(id).get()
            .then(function(doc) {
                if (doc.exists) {
                    setArticle(doc.data());
                    console.log("doc.data")
                    console.log(doc.data())
                    setWaiting(false)
                } else {
                    console.log("El artículo no existe");
                }
            }).catch(function(error) {
            console.log("Error en búsqueda de artículo: ", error);
        });
    }

    useEffect(() => {
        getArticle()
    }, []);


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
                        <ArticleDetail article={article} />
                        :
                          null
                }
                {
                    waiting === false && article.name === undefined
                    ?
                        <ErrorPage text={errorStrings.articleNotFound}/>
                        :null
                }
            </div>
        </div>
    )
}

export default ArticleDetailContainer;