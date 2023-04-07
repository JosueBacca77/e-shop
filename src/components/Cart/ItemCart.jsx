import './ItemCart.css'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import '../../General.css'
import {Store} from "../../Store";
import {ReplaceItemCart, UpdateTotalCart} from "../../Store/ManageContext";
import {useHistory} from "react-router-dom";
import { CardMedia } from '@material-ui/core';
import Counter from '../Counter';



const ItemCart =({article, onDelete})=> {

    const [countAdded, setCountAdded] = useState(article?.count)

    const [data, setData] = useContext(Store);

    let history = useHistory();

    useEffect(() => {
        if(countAdded >0 && countAdded <= article.data.stock ){
            //reemplazo cantidad del item
            ReplaceItemCart(article.id,countAdded,data,setData)
            //actualizo total carrito
            UpdateTotalCart(data,setData)
        }
    }, [countAdded, article?.data?.stock])


    const goDetail =()=> {
        history.push("/detail/"+article.id)
    }

    return(
        <article key={article.id} className='card item flex-start'>
            <div className='cardMediaContainer'>
                <CardMedia
                    width={220}
                    height={220}
                    component="img"
                    alt="Imagen de archivo"
                    id="imgstore"
                    src={article?.data?.images && article.data.images.length>0? `/Images/${article?.data?.images[0]}`:'/Images/notArticleImages'}
                    title="Imagen"
                />
            </div>
            <div className='space-between content'>
                <article className='itemCardData'>
                    <div className='deleteItem'>
                        <IconButton onClick={()=>onDelete(article)}>
                            <DeleteIcon className='delete'  />
                        </IconButton>
                    </div>
                    <div className='itemCardNameDesc'>
                        <span className='itemCardname' onClick={goDetail}>
                            {article.data.name}
                        </span>

                        <div className='descrip'>
                            {article.data.description}
                        </div>
                    </div>

                    <div className='space-between itemCardPrice'>

                        <Counter
                            limit={article.data.stock}
                            count={countAdded}
                            setCount={setCountAdded}
                            disabled={article.data.stock<=0}
                            leastAble={1}
                        />

                        <div className='price'>
                            <span> $  </span><span className='number-price'>{article.data.price}</span>
                        </div>

                    </div>
                    
                </article>
                
            </div>

        </article>
    )
}

export default ItemCart