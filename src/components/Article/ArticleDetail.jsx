import './ArticleDetail.css'
import React, {useContext, useState} from "react";
import {GetPlural, VerifyContains} from "../../Utils";
import {useHistory} from "react-router-dom";
import {Store} from "../../Store";
import ModifyCountCart from "../ModifyCountCart";
import {AddItemToCart, ModifyCountItem, UpdateTotalCart} from "../../Store/ManageContext";


const ArticleDetail =({article})=> {

    let history = useHistory();

    const [selectedImage, setSelectedImage] = useState(article.data.images[0])

    const [added, setAdded] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const [data, setData] = useContext(Store)

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
        <article className='article'>
            <ul className='images'>
                {article.data.images.length >0
                    ?
                    article.data.images.map(ima => (
                        <li key={ima}>
                            <img className={selectedImage==ima
                                ?'selectedImage':'image'}
                                 src={`/Images/${ima}`} alt={ima}
                                 onClick={()=>handleChangeImage(ima)}
                            />
                        </li>
                    ))
                    :null}
            </ul>
            <section className='mainimage'>
                <img
                    src={`/Images/${selectedImage}`}
                    alt={article.data.name}
                    className='mainimage'
                />
            </section>
            <section className='detailArticle'>
                <h1 className='articleName'>
                    {article.data.name}
                </h1>
                <div className='price'>
                    <h2>{`$ ${article.data.price}`}</h2>
                    <span>{`c/${article.data.unit}`}</span>
                </div>
                <p>
                    {article.data.description}
                </p>
                <div className='price'>
                    <p>Stock disponible:</p>
                    <span style={{'fontWeight':'bold'}}>{`${article.data.stock} ${GetPlural(article.data.unit)}`}</span>
                </div>
                <br/>
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
            </section>
        </article>
    )
}

export default ArticleDetail;