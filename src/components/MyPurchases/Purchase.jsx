import {GetSubtotalItem} from "../../Utils";

const Purchase=({purchase})=>{

    console.log(purchase)

    return(
        <article className="purchase">
            <h5>date</h5>
            <section className="items-purchase">
            {
                purchase.data.items.map(item=>{
                    // console.log(item)
                    <>
                    <span className="count-item-purchase">{item.data.count}</span>
                    <div className="photo">{item.data.images[0]}</div>
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