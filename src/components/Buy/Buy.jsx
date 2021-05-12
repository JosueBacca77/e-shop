import React, {useContext, useLayoutEffect} from "react";
import BuyForm from "./BuyForm";
import {getFireStore} from "../../Data";
import {ClearCart} from "../../Store/ManageContext";
import {Store} from "../../Store";
import firebase from 'firebase/app';
import {useAuth} from "../../AuthContext"


const Buy =()=> {

    const db = getFireStore()
    const [dataCont, setDataCont] = useContext(Store);
    const {currentUser} = useAuth() 

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const validateStock =(ids,data,setId,setWithoutStock,setApproved,setWaiting)=> {

        setWithoutStock([])
        
        const GetArticles = new Promise((resolve) => {
            resolve(
                db.collection('Articles').where(firebase.firestore.FieldPath.documentId(),'in',ids).get()
                    .then(arts => {
                        let arr = [];
                        let validStock = true
                        let notstock = []
                        arts.forEach(art => {
                            arr.push({
                                id: art.id,
                                data: art.data()
                            })
                        })
                        for (const art of arr){
                            const item = data.items.find(elem=> elem.id == art.id)
                            if (art.data.stock < item.data.stock){
                                notstock.push(art)
                                validStock = false
                            }
                        }
                        if (validStock){
                            db.collection('Sales').add(data)
                                .then(({id})=>{
                                    setId(id)
                                    ClearCart(setDataCont)
                                    setApproved(true)
                                })
                                .catch(error=> console.log(`Error al cargar la compra: ${error}`))
                        }else{
                            setWithoutStock(notstock)
                        }
                    })
                    .catch(error => console.log(`Los items seleccionados para la compra no son correctos ${error}`))
            )
    })

        GetArticles
            .then(()=>{
                setWaiting(false)
            })
            .catch(error=>{
                console.log(error)
                setWaiting(false)
            })
    };

    const GetIdsFromItems =(items)=> {
        let ids = []
        for (const item of items){
            ids.push(item.id)
        }
        return ids
    }

    const buy =(data,setId,setWithoutStock,setApproved,setWaiting)=> {
        let ids = GetIdsFromItems(data.items)
        validateStock(ids,data,setId,setWithoutStock,setApproved,setWaiting)
    }

    return(
        <div className='main-view'>
            <BuyForm 
                buy={buy}
                user={currentUser}
            />
        </div>
    )
}

export default Buy