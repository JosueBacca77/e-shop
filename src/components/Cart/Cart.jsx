import React, {useContext} from "react";
import '../../General.css'
import back from "../Images/back-ground.jpg";
import {Store} from "../../Store/index";
import ItemCart from "./ItemCart";
import lightGreen from "@material-ui/core/colors/lightGreen";
import {Acumulator} from "../../Utils";



const Cart =()=>{

    const [data, setData] = useContext(Store);

    const onDelete =(item)=>{
        setData(
            {...data,
                'items':data.items=
                    data.items.filter((it, index, arr)=>{
                    return it.id !== item.id;
                })
            }
            )

        //setData({...data,'total':data.items.reduce(Acumulator,0)})
        setData({...data,'total':data.items.reduce(Acumulator,0).toFixed(2)})
    }

    return(
        <div className='container' style={{
            backgroundImage: `url(${`${back}`})`,
        }}>
            <div className='main-view'>
                {
                    data.items.length === 0
                        ?
                        <h1 className='subtitle'>El carrito está vacío por el momento...</h1>
                        :
                        <>
                        <div className='head'>
                            <h1 className='subtitle'>Mi Carrito</h1>
                            <span className='right-content' style={{'color': lightGreen['A700']}}>
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