import {getFireStore} from "../../Data";
import {useLayoutEffect, useMemo, useState} from "react";
import Purchase from "./Purchase";
import {useAuth} from "../../AuthContext"
import SortableTableMUI from "../General/SortableTableMUI";
import DarkThemeContainerMUI from "../General/DarkThemeContainerMui";
import ModalMUI from "../General/ModalMUI";

const PurchaseContainer=()=>{

    const db = getFireStore()
    const [purchase, setPurchase] = useState({})
    const [userPurchases, setUserPurchases] = useState([])

    const {currentUser} = useAuth()

    const purchasesHeadCells = [
        {
            id: 'date',
            type:'date',
            numeric: false,
            disablePadding: false,
            label: 'Date',
            align:'left'
        },
        {
            id: 'card_number',
            numeric: false,
            disablePadding: false,
            label: 'Card number',
            align:'left'
        },
        {
            id: 'countFees',
            numeric: true,
            disablePadding: false,
            label: 'Amount of fees',
            align:'right'
        },
        {
            id: 'fee',
            numeric: true,
            disablePadding: false,
            label: 'Fee',
            align:'right'
        },
        {
            id: 'total',
            numeric: true,
            disablePadding: false,
            label: 'Total',
            align:'right'
        },
        {
            id: 'viewDetail',
            numeric: true,
            disablePadding: true,
            label: '',
            align:'right'
        },
    ];


    const cleanPurchase=()=>{
        setPurchase({})
    } 

    const userPurchasesData = useMemo(() => {
        const purchasesData = []
        userPurchases.forEach(purchase => {
            let formattedPurchase = {
                id: purchase.id,
                ...purchase.data()
            }
            purchasesData.push(formattedPurchase)
        });
        return purchasesData
    }, [userPurchases.length])

    const GetPurchase = (id) =>{
        db.collection('Sales')
        .where('iduser','==',currentUser.uid)
        .get()
            .then(function(doc) {
                if (doc.docs.length>0) {
                    setUserPurchases(doc.docs)
                } else {
                    console.log("El ID de compra no corresponde");

                }
            }).catch(function(error) {
            console.log("Error en búsqueda de la compra: ", error);
        });
    }

    const handleSetPurchase = (selectedPurchase) =>{
        setPurchase(selectedPurchase)
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        GetPurchase();
    }, [])

    return(
        <div className='main-view'>
            {
                userPurchases.length &&
                <div className='center'>
                    <DarkThemeContainerMUI>
                        <SortableTableMUI 
                            title={''}
                            rows={userPurchasesData}
                            headCells={purchasesHeadCells}
                            viewDetail='View purchase'
                            onClickViewDetail={handleSetPurchase}
                        />
                    </DarkThemeContainerMUI>
                </div>
            }
            {
                true 
                ?
                <ModalMUI
                    open={purchase?.id}
                    handleClose={cleanPurchase}
                >
                    <DarkThemeContainerMUI>

                        <Purchase
                            purchase={purchase}
                            cleanPurchase={cleanPurchase}
                        />
                    </DarkThemeContainerMUI>

                </ModalMUI>
                :
                null
            }
        </div>
    )
}

export default PurchaseContainer