import React, {useContext} from "react";
import '../../General.css'
import {Store} from "../../Store/index";
import ItemCart from "./ItemCart";
import {DeleteItemCart, UpdateTotalCart} from "../../Store/ManageContext";
import {useHistory} from "react-router-dom";
import {GreenButton} from "../General/Buttons";


const Cart =()=>{

    let history = useHistory();

    const [data, setData] = useContext(Store);

    const onDelete =(item)=>{
        DeleteItemCart(item.id,data,setData)
        UpdateTotalCart(data,setData)
    }

    const handleGoBuy =()=>{
        history.push('/buy')
    }

    return(
        <div className='main-view'>
            {
                data.items !== undefined && data.items.length === 0
                    ?
                    <h1 className='subtitle'>El carrito está vacío por el momento...</h1>
                    :
                    <>
                        <div className='head'>
                            <h1 className='subtitle'>Mi Carrito</h1>
                            <span className='right-content important-data' >
                                {`$  ${data.total}`}
                            </span>
                        </div>
                        {
                            data.items.map(article =>
                                <ItemCart
                                    key={article.id}
                                    article={article}
                                    onDelete={onDelete}
                                />
                            )
                        }

                        <div className='center'>
                            <GreenButton
                                text='Comprar'
                                onClick={handleGoBuy}
                            />
                        </div>
                    </>
            }
        </div>
    )
}
export default Cart;