import back from '../Images/back-ground.jpg';
import React, {useEffect, useState} from "react";
import {LinearIndeterminate} from "../General/Progress";
import {useParams} from 'react-router-dom'
import {getArticlesByHeading,getHeadingNameById} from "../../Data/GetData";
import ArticleList from "../ArticleList";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import {errorStrings} from "../General/constants/strings";


const Heading =()=> {

    const [waiting,setWaiting] = useState(true)
    const {id} = useParams();
    const [articles, setArticles] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        setName("")
        setArticles([])
        setWaiting(true)
        getName.then(name => setName(name));
        getHeading
            .then(
                function(art){
                    setArticles(art);
                    setWaiting(false)
                } );
    }, [id]);

    const getName = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(getHeadingNameById(id));
        }, 1000)
    })

    const getHeading = new Promise((resolve, reject) => {
        //reemplazar por llamada a backend
        setTimeout(() => {
            resolve(getArticlesByHeading(id));
        }, 2000)
    })

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
                    articles.length>0 && waiting ===false
                        ?
                        <ArticleList
                            articles={articles}
                            title={name}
                        />
                        :
                        null
                }
                {
                    waiting === false && name ===''
                        ?
                        <ErrorPage text={errorStrings.headingNotFound}/>
                        :null
                }
            </div>
        </div>
    )
}

export default Heading;