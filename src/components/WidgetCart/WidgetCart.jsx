import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../Store/index';
import ItemCartWidget from "./ItemCartWidget";

const WidgetCart = ({show}) => {
    const [data, setData] = useContext(Store);

    return (
        <>
            {
                data.items !== undefined
                ?
                    <div className={`widgetCart ${show ? 'open' : 'close'}`}>
                        <div className='items-cart-widget'>
                            {
                                data.items.map(article =>
                                    <ItemCartWidget article={article} />
                                )
                            }
                        </div>
                        <section className='total-cart-widget general-price'>
                            <span >{`$ ${data.total}`}</span>
                        </section>
                    </div>
                    :null
            }
        </>
    )
}

export default WidgetCart;