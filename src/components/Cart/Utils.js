import {useContext} from "react";
import {Store} from "../../Store";

const GetTotalCart =(data)=>{
    let total = 0
    console.log("itemsss get total")
    console.log(data)
    data.map(item=>total += parseFloat(item.price)*parseFloat(item.count))

    return(total.toFixed(2))
}

export {GetTotalCart}