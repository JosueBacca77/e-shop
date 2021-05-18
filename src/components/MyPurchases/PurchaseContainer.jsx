import {getFireStore} from "../../Data";
import {useLayoutEffect, useState} from "react";
import Purchase from "./Purchase";
import SearchPurchase from "./SearchPurchase";
import {useAuth} from "../../AuthContext"
import firebase from 'firebase/app';

const PurchaseContainer=()=>{

    const db = getFireStore()
    const [tried, setTried] = useState(false)
    const [purchase, setPurchase] = useState({})
    const {currentUser} = useAuth()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        console.log("user")
        console.log(currentUser)
        
    }, [])

    const cleanPurchase=()=>{
        setPurchase({})
        setTried(false)
    } 

    const GetPurchase = (id) =>{
        console.log(currentUser.uid)
        db.collection('Sales')
        .where(firebase.firestore.FieldPath.documentId(), '==',id)
        .where('iduser','==',currentUser.uid)
        .get()
            .then(function(doc) {
                if (doc.docs.length>0) {
                    setPurchase(
                        {
                            id: doc.docs[0].id,
                            data: doc.docs[0].data()
                        }
                    );                
                } else {
                    console.log("El ID de compra no corresponde");

                }
            }).catch(function(error) {
            console.log("Error en búsqueda de la compra: ", error);
        });
        setTried(true)
    }

    return(
        <div className='main-view center'>
            {
                purchase.data !== undefined 
                    ?
                    <Purchase
                        purchase={purchase}
                        cleanPurchase={cleanPurchase}
                    />
                    :
                    null
            }
            {
                purchase.data === undefined 
                    ?
                    <SearchPurchase
                        GetPurchase={GetPurchase}
                        show={tried}
                    />
                    :null
            }
        </div>
    )
}

export default PurchaseContainer