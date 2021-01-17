import './ArticleDetail.css'
import back from "../Images/back-ground.jpg";
import React, {useContext, useEffect, useState} from "react";
import {GetPlural, VerifyContains} from "../../Utils";
import {useHistory} from "react-router-dom";
import {Store} from "../../Store";
import ModifyCountCart from "../ModifyCountCart";
import {AddItemToCart, ModifyCountItem, UpdateTotalCart} from "../../Store/ManageContext";


const ArticleDetail =({article})=> {

    console.log("article en detail")
    console.log(article)

    let history = useHistory();

    //const [selectedImage, setSelectedImage] = useState(article.images[0])

    const [added, setAdded] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const [data, setData] = useContext(Store)

    const handleChangeImage =(image)=> {
        //setSelectedImage(image)
    }

    const handleAddCart =()=> {
        if(countAdded>0 && countAdded <= article.stock ){
            setAdded(true)
            //si esta en el cart sumo las unidades
            if (VerifyContains(data.items,article)){
                //si esta sumo las unidades
                ModifyCountItem(article.id, countAdded,data,setData)
                //actualizo total carrito
                UpdateTotalCart(data,setData)
            }else{
                //si no esta lo sumo al cart
                AddItemToCart(article,countAdded,data,setData)
                //actualizo total carrito
                UpdateTotalCart(data,setData)
            }
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
                    {/*<section className='images'>
                        <ul>
                            {article.data.images.length >0
                                ?
                                article.data.images.map(ima => (
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
                    </section>*/}
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