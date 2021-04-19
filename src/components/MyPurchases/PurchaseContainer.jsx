import {getFireStore} from "../../Data";
import {useLayoutEffect, useState} from "react";
import Purchase from "./Purchase";
import SearchPurchase from "./SearchPurchase";

const PurchaseContainer=()=>{

    //const {id} = useParams();
    const db = getFireStore()
   // const [waiting,setWaiting] = useState(true)
    const [purchase, setPurchase] = useState( {})

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const GetPurchase = (id) =>{
        db.collection('sales').doc(id).get()
            .then(function(doc) {
                if (doc.exists) {
                    setPurchase(
                        {
                            id: doc.id,
                            data: doc.data()
                        }
                    );
                    //setWaiting(false)
                } else {
                    console.log("El ID de compra no corresponde");
                }
            }).catch(function(error) {
            console.log("Error en búsqueda de la compra: ", error);
        });
    }

    return(
        <div className='main-view center'>
            {/*                {
                    waiting === true
                        ?
                        <LinearIndeterminate />
                        :
                        null
                }*/}
            {
                purchase.data !== undefined //&& waiting === false
                    ?
                    <Purchase
                        purchase={purchase}
                    />
                    :
                    null
            }
            {
                purchase.data === undefined //&& waiting === false
                    ?
                    <SearchPurchase
                        GetPurchase={GetPurchase}
                    />
                    :null
            }
            {/*                {
                    purchase.data.name === undefined && waiting === false
                        ?
                        <ErrorPage text={errorStrings.purchaseNotFound}/>
                        :null
                }*/}
        </div>
    )
}

export default PurchaseContainer