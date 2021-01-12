import React, {useContext} from "react";
import '../../General.css'
import back from "../Images/back-ground.jpg";
import {Store} from "../../Store/index";
import ItemCart from "./ItemCart";
import lightGreen from "@material-ui/core/colors/lightGreen";
import {GetTotalCart} from "./Utils";

const Cart =()=>{

    const [data, setData] = useContext(Store);

    const onDelete =(item)=>{
        setData(
        data.filter((it, index, arr)=>{
            return it.id !== item.id;
        })
    )
    }

    return(
        <div className='container' style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='main-view'>
                {
                    data.length === 0
                        ?
                        <h1 className='subtitle'>El carrito está vacío por el momento...</h1>
                        :
                        <>
                        <div className='head'>
                            <h1 className='subtitle'>Mi Carrito</h1>
                            <span className='right-content' style={{'color': lightGreen['A700']}}>
                                {`$  ${GetTotalCart(data.items)}`}
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