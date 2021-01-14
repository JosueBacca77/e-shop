import React, {useContext} from "react";
import '../../General.css'
import back from "../Images/back-ground.jpg";
import {Store} from "../../Store/index";
import ItemCart from "./ItemCart";
import {DeleteItemCart, UpdateTotalCart} from "../../Store/ManageContext";


const Cart =()=>{

    const [data, setData] = useContext(Store);

    const onDelete =(item)=>{
        DeleteItemCart(item.id,data,setData)
        UpdateTotalCart(data,setData)
    }

    return(
        <div className='container' style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='main-view'>
                {
                    data.items !== undefined && data.items.length === 0
                        ?
                        <h1 className='subtitle'>El carrito está vacío por el momento...</h1>
                        :
                        <>
                        <div className='head'>
                            <h1 className='subtitle'>Mi Carrito</h1>
                            <span className='right-content general-price' >
                                {`$  ${data.total}`}
                            </span>
                        </div>
                        {
                            data.items.map(article =>
                            <ItemCart
                                article={article}
                                onDelete={onDelete}
                            />
                            )
                        }
                        </>
                }
            </div>
        </div>
    )
}
export default Cart;