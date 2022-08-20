import './ItemCart.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useState} from "react";
import '../../General.css'
import ModifyCountCart from "../ModifyCountCart";
import {Store} from "../../Store";
import {ReplaceItemCart, UpdateTotalCart} from "../../Store/ManageContext";
import CardActionArea from "@material-ui/core/CardActionArea";
import {useHistory} from "react-router-dom";
import { CardMedia } from '@material-ui/core';
import Counter from '../Counter';



const ItemCart =({article, onDelete})=> {

    const [adding, setAdding] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const [data, setData] = useContext(Store)

    const handleAddCart =()=> {
        if(countAdded >0 && countAdded <= article.data.stock ){
            //reemplazo cantidad del item
            ReplaceItemCart(article.id,countAdded,data,setData)
            //actualizo total carrito
            UpdateTotalCart(data,setData)
            setAdding(false)
        }
    }

    const handleChangeCount =(e)=> {
        setCountAdded(e.target.value)
    }

    const handleClose =()=> {
        setAdding(false)
    }

    let history = useHistory();

    const goDetail =()=> {
        history.push("/detail"+article.id)
    }

    console.log('article',article)

    return(
        <article key={article.id} className='item'>
            <section className='flex-start'>
                <div className='cardMediaContainer'>
                    <CardMedia
                        component="img"
                        alt="Imagen de archivo"
                        id="imgstore"
                        src={article?.data?.images && article.data.images.length>0? `/Images/${article?.data?.images[0]}`:'/Images/notArticleImages'}
                        // src={pedido.imagen ? imgURL(pedido.imagen) : NO_PEDIDO_IMAGE}
                        title="Imagen"
                    />
                </div>
                <article className='itemCardData'>
                    <CardActionArea onClick={goDetail}>
                        <h1 className='name' >
                            {article.data.name}
                        </h1>
                    </CardActionArea>
                    <div className='itemCardDetail'>
                        <div className='descrip'>
                            <div>
                                {article.data.description}
                            </div>
                            <div className='price'>
                                <span> $  </span><span className='number-price'>{article.data.price}</span>
                            </div>
                        </div>
                    </div>
                </article>
                <div className='itemCardOptions'>
                    <IconButton onClick={()=>onDelete(article)}>
                        <DeleteIcon className='delete'  />
                    </IconButton>
                    <Counter
                        limit={article.data.stock}
                        count={countAdded}
                        setCount={setCountAdded}
                        disabled={article.data.stock<=0}
                    />
                </div>

                <section className='right-content' >
                    {
                        adding
                            ?
                            // <ModifyCountCart
                            //     article={article}
                            //     handleChangeCount={handleChangeCount}
                            //     handleAddCart={handleAddCart}
                            //     handleClose={handleClose}
                            //     countAdded={countAdded}
                            // />
                            null
                            :
                            <div className='iconsItemCart'>
                                <IconButton onClick={()=> setAdding(true)}>
                                    <EditIcon className='edit' />
                                </IconButton>
                                <IconButton onClick={()=>onDelete(article)}>
                                    <DeleteIcon className='delete'  />
                                </IconButton>
                            </div>
                    }
                </section>
            </section>


            <section className='content space-around'>
                <div className='descrip'>
                    <div>
                        {article.data.description}
                    </div>
                    <div className='price'>
                        <span> $  </span><span className='number-price'>{article.data.price}</span>
                    </div>
                </div>
                <div className='count'>
                        <span className='numberCircle '>
                            <span>
                                {
                                    data.items.find(item=>item.id == article.id).count
                                }
                            </span>
                        </span>
                </div>
            </section>
        </article>
    )
}

export default ItemCart