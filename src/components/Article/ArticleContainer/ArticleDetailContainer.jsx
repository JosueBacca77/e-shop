import React, {useEffect, useLayoutEffect, useState} from "react";
import ArticleDetail from "../ArticleDetail";
import {LinearIndeterminate} from "../../General/Progress";
import {useParams} from 'react-router-dom'
import {errorStrings} from "../../General/constants/strings";
import ErrorPage from "../../General/ErrorPage/ErrorPage";
import {getFireStore} from "../../../Data";


const ArticleDetailContainer =()=>{

    const {id} = useParams();
    const db = getFireStore()
    const [waiting,setWaiting] = useState(true)
    const [article, setArticle] = useState( {
        id: '',
        data:{
            name: '',
            images: [],
            description: '',
            price: '',
            unit: '',
            stock: ''
        },
        count: 0
    })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getArticle =()=>{
        db.collection('Articles').doc(id).get()
            .then(function(doc) {
                if (doc.exists) {
                    setArticle(
                        {
                            id: doc.id,
                            data: doc.data()
                        }
                    );
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
    },[]);


    return(
        <div
            style={{
                backgroundImage: `url(${`${'/Images/back-ground.jpg'}`})`,
            }}
        >
            <div className='main-view'>
                {
                    waiting === true
                    ?
                        <LinearIndeterminate />
                        :
                        null
                }
                {
                      article.data.name !== undefined && waiting === false
                        ?
                        <ArticleDetail article={article} />
                        :
                          null
                }
                {
                    waiting === false && article.data.name === undefined
                    ?
                        <ErrorPage text={errorStrings.articleNotFound}/>
                        :null
                }
            </div>
        </div>
    )
}

export default ArticleDetailContainer;