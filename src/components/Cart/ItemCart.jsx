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

    return(
        <article key={article.id} className='item'>
            <section className='head space-around'>
                <CardActionArea onClick={goDetail}>
                    <h1 className='subtitle name' >
                        {article.data.name}
                    </h1>
                </CardActionArea>

                <section className='right-content' >
                    {
                        adding
                            ?
                            <ModifyCountCart
                                article={article}
                                handleChangeCount={handleChangeCount}
                                handleAddCart={handleAddCart}
                                handleClose={handleClose}
                                countAdded={countAdded}
                            />
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