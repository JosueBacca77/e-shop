import React, {useContext} from "react";
import {Store} from "../../Store";
import './ItemCartWidget.css'


const ItemCartWidget =({article})=>{

    const [data] = useContext(Store)

    return(
        <article key={article.id} className='item-widget'>
            <div className='content-widget'>
                <div className='descrip'>
                    <div>
                        {article.data.name}
                    </div>
                    <div className='price'>
                        <span> $  </span><span className='number-price'>{article.data.price}</span>
                    </div>
                </div>
                <div className='count-widget'>
                        <span className='numberCircle-widget'>
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

export default ItemCartWidget