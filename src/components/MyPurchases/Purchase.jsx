import {GetSubtotalItem} from "../../Utils";

const Purchase=({purchase})=>{

    return(
        <article className="purchase">
            <h5>date</h5>
            <section className="items-purchase">
            {
                purchase.data.items.map(item=>{
                    <>
                    <span className="count-item-purchase">{item.count}</span>
                    <div className="photo">{item.images[0]}</div>
                    <span className="price">{item.data.price}</span>
                    <span className="subtotal">{GetSubtotalItem(item)}</span>
                    </>
                })
            }
            </section>
        </article>
    )
}

export default Purchase