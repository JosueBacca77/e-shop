import './ItemCart.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useState} from "react";
import '../../General.css'
import ModifyCountCart from "../ModifyCountCart";
import {Store} from "../../Store";
import {Acumulator} from "../../Utils";



const ItemCart =({article, onDelete})=> {

    const [adding, setAdding] = useState(false)

    const [countAdded, setCountAdded] = useState(0)

    const [data, setData] = useContext(Store)

    const handleAddCart =()=> {
            setData(
                {
                    'items':data.items= data.items.map(art => {

                        if (art.id == article.id) {
                            return  {...art,'count':parseInt(countAdded)}
                            //art.count = parseInt(art.count) + parseInt(countAdded)
                        }else{
                            return {...art}
                        }
                    })
                }

            )
        setData({...data,'total':data.items.reduce(Acumulator,0).toFixed(2)})

    }

    const handleChangeCount =(e)=> {
        setCountAdded(e.target.value)
    }

    const handleClose =()=> {
        setAdding(false)
    }

    return(
        <article key={article.id} className='item'>
            <section className='head'>
                <h2 className='subtitle name'>{article.name}</h2>
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
                            <>
                            <IconButton >
                                <EditIcon className='edit' onClick={()=> setAdding(true)}/>
                            </IconButton>
                            <IconButton >
                                <DeleteIcon className='delete' onClick={()=>onDelete(article)} />
                            </IconButton>
                            </>
                    }
                </section>
            </section>

            <div className='content'>
                <div className='descrip'>
                    <div>
                        {article.description}
                    </div>
                    <div className='price'>
                        <span> $  </span><span className='number-price'>{article.price}</span>
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
            </div>

        </article>
    )
}

export default ItemCart