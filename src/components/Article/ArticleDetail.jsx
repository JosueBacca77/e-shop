import './ArticleDetail.css'
import React, {useContext, useEffect, useState} from "react";
import {GetPlural, VerifyContains} from "../../Utils";
import {useHistory} from "react-router-dom";
import {Store} from "../../Store";
import ModifyCountCart from "../ModifyCountCart/ModifyCountCart";
import {AddItemToCart, ModifyCountItem, UpdateTotalCart} from "../../Store/ManageContext";
import {useAuth} from "../../AuthContext"


const ArticleDetail =({article})=> {

    let history = useHistory();

    const [selectedImage, setSelectedImage] = useState(article.data.images[0])

    const [added, setAdded] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const [data, setData] = useContext(Store)

    const {currentUser} = useAuth()

    const handleChangeImage =(image)=> {
        setSelectedImage(image)
    }

    const handleAddCart =()=> {
        if(countAdded>0 && countAdded <= article.data.stock ){
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
        <article className='card article'>
            <div className='images'>
                {article.data.images.length >0
                    ?
                    article.data.images.map(ima => (
                        <div key={ima} onMouseEnter={()=>handleChangeImage(ima)}>
                            <img 
                                className={`image ${selectedImage==ima && 'selected-image-list' }`}
                                src={`/Images/${ima}`} alt={ima}
                            />
                        </div> 
                    ))
                    :null}
            </div>
            <section className='main-image-container'>
                <img
                    src={`/Images/${selectedImage}`}
                    alt={article.data.name}
                    className='selected-image'
                />
            </section>
            <section className='detailArticle'>
                <h1 className='articleName'>
                    {article.data.name}
                </h1>
                <div className='price'>
                    <span className='price-number'>{`$ ${article.data.price}`}</span>
                    <span>{`per ${article.data.unit}`}</span>
                </div>
                <p>
                    {article.data.description}
                </p>
                <div className='price'>
                    <span style={{'fontWeight':'bold'}}>{`${article.data.stock} ${GetPlural(article.data.unit)} available`}</span>
                </div>
                <br/>
                <div className='add-to-cart'>
                    {
                        article.data.stock >0
                            ?
                            <ModifyCountCart
                                article={article}
                                handleChangeCount={handleChangeCount}
                                handleAddCart={handleAddCart}
                                countAdded={countAdded}
                            />
                            :null
                    }
                </div>
            </section>
        </article>
    )
}

export default ArticleDetail;