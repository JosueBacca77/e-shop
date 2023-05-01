import {useContext, useLayoutEffect} from "react";
import '../../General.css';
import './Cart.css';
import {Store} from "../../Store/index";
import ItemCart from "./ItemCart";
import {DeleteItemCart, UpdateTotalCart} from "../../Store/ManageContext";
import {useHistory} from "react-router-dom";
import {GreenButton} from "../General/Buttons";
import { CartArticleInterface } from "../interfaces/CartArticle.interface";


const Cart =()=>{

    const history = useHistory();

    const [data, setData] = useContext(Store);

    const onDelete =(item: CartArticleInterface)=>{
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
                    <h1 className='subtitle'>Your cart is empty...</h1>
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
                            data.items.map( (article: CartArticleInterface) =>
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