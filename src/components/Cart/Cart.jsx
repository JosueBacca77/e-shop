import React, {useContext, useLayoutEffect} from "react";
import '../../General.css';
import './Cart.css';
import {Store} from "../../Store/index";
import ItemCart from "./ItemCart";
import {DeleteItemCart, UpdateTotalCart} from "../../Store/ManageContext";
import {useHistory} from "react-router-dom";
import {GreenButton} from "../General/Buttons";
import {useAuth} from '../../AuthContext'


const Cart =()=>{

    let history = useHistory();

    const [data, setData] = useContext(Store);

    const {currentUser} = useAuth()

    const onDelete =(item)=>{
        DeleteItemCart(item.id,data,setData)
        UpdateTotalCart(data,setData)
    };

    const handleGoBuy =()=>{
        history.push('/buy')
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className='main-view'>
            {
                data.items !== undefined && data.items.length === 0
                    ?
                    <h1 className='subtitle'>El carrito está vacío por el momento...</h1>
                    :
                    <>
                        <div className='head'>
                            <h1 className='left-subtitle'>Mi Carrito</h1>
                            <span className='right-content important-data total-cart' >
                                {`$  ${data.total}`}
                            </span>
                        </div>
                        <div className='flex-center items'>
                        {
                            data.items.map(article =>
                                <ItemCart
                                    key={article.id}
                                    article={article}
                                    onDelete={onDelete}
                                />
                            )
                        }
                        </div>

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