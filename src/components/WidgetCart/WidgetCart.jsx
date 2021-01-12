import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../Store/index';

const WidgetCart = ({show}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
{/*            {
                data.map(article =>
                    <p>{article.name}</p>
                )
            }*/}
        </div>
    )
}

export default WidgetCart;