import React, {useContext} from "react";
import BuyForm from "./BuyForm";
import {getFireStore} from "../../Data";
import {ClearCart, initialStore} from "../../Store/ManageContext";
import {Store} from "../../Store";

const Buy =()=> {

    const db = getFireStore()
    const [dataCont, setDataCont] = useContext(Store);

    const buy =(data,setId)=> {
        db.collection('sales').add(data)
            .then(({id})=>{
                console.log(id)
                setId(id)
                ClearCart(setDataCont)
            })
            .catch(error=> console.log(`Error al cargar la compra: ${error}`))
    }

    return(
        <div className='container' style={{
            backgroundImage: `url(${`${'/Images/back-ground.jpg'}`})`,
        }}>
            <div className='main-view'>
                <BuyForm buy={buy}/>
            </div>
        </div>
    )
}

export default Buy