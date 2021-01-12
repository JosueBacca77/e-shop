import './ArticleDetail.css'
import back from "../Images/back-ground.jpg";
import React, {useContext, useState} from "react";
import {GetPlural, VerifyContains} from "../../Utils";
import TextField from "@material-ui/core/TextField";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ErrorLabel} from "../General/Labels";
import {infoStrings} from "../General/constants/strings";
import {useHistory} from "react-router-dom";
import {Store} from "../../Store";
import ModifyCountCart from "../ModifyCountCart";
import {GetTotalCart} from "../Cart/Utils";


const ArticleDetail =({article})=> {

    let history = useHistory();

    const [selectedImage, setSelectedImage] = useState(article.images[0])

    const [added, setAdded] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const [data, setData] = useContext(Store)

    const handleChangeImage =(image)=> {
        setSelectedImage(image)
    }

    const handleAddCart =()=> {
        if(countAdded>0 && countAdded <= article.stock ){
            setAdded(true)
            //si esta en el cart sumo las unidades
            if (VerifyContains(data.items,article)){
                //si esta sumo las unidades
                console.log("esta")
                setData(
                        data.items= data.map(art => {
                            if (art.id == article.id) {
                                art.count = parseInt(art.count) + parseInt(countAdded)
                            }
                        })
                )
                setData(data.total=GetTotalCart(data.items))
            }else{
                //si no esta lo sumo al cart
                console.log("no esta")
                setData(data.items.push({...article,'count':parseInt(countAdded)}))
                console.log("primer data")
                console.log(data)
                //ahora actualizo total
                setData(data.total=GetTotalCart(data.items))
            }

            console.log(data)
            history.push("/cart")
        }
    }

    const handleChangeCount =(e)=> {
        setCountAdded(e.target.value)
    }

    return(
        <div
            className='container'
            style={{
                backgroundImage: `url(${`${back}`})`,
        }}>
            <article className='article'>
                <div className='info'>
                    <section className='images'>
                        <ul>
                            {article.images.length >0
                                ?
                                article.images.map(ima => (
                                    <li>
                                        <img className={selectedImage==ima
                                            ?'selectedImage':'image'}
                                             src={ima} alt='hola'
                                             onClick={()=>handleChangeImage(ima)}
                                        />
                                    </li>
                                ))
                                :null}
                        </ul>
                    </section>
                    <section >
                        <img
                            src={selectedImage}
                            alt='hola'
                            className='mainimage'/>
                    </section>
                    <section className='detailArticle'>
                        <h1 className='articleName'>
                            {article.name}
                        </h1>
                        <div className='price'>
                            <h2>{`$ ${article.price}`}</h2>
                            <span>{`c/${article.unit}`}</span>
                        </div>
                        <p>
                            {article.description}
                        </p>
                        <div className='price'>
                            <p>Stock disponible:</p>
                            <span style={{'fontWeight':'bold'}}>{`${article.stock} ${GetPlural(article.unit)}`}</span>
                        </div>
                        <br/>

                        <ModifyCountCart
                            article={article}
                            handleChangeCount={handleChangeCount}
                            handleAddCart={handleAddCart}
                            countAdded={countAdded}
                        />

                    </section>
                </div>
            </article>

        </div>
    )
}

export default ArticleDetail;