import {getFireStore} from "../../Data";
import {useLayoutEffect, useMemo, useState} from "react";
import Purchase from "./Purchase";
import {useAuth} from "../../AuthContext"
import SortableTableMUI from "../General/SortableTableMUI";
import DarkThemeContainerMUI from "../General/DarkThemeContainerMui";
import ModalMUI from "../General/ModalMUI";
import { SaleInterface } from "../interfaces/Sale.interface";

interface purchase {
    id: string,
    data: SaleInterface
}

const PurchaseContainer=()=>{

    const emptyPurchase:purchase = {
        id:'',
        data:{
            card_number: '',
            confemail: '',
            countFees: 0,
            date: 0,
            email: '',
            fee: '',
            iduser: '',
            items: [],
            name:'',
            phone:'',
            state: '',
            surname: '',
            total: ''
        }
    }

    const db = getFireStore()
    const [purchase, setPurchase] = useState<purchase>(emptyPurchase)
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
        setPurchase(emptyPurchase)
    } 

    const userPurchasesData = useMemo(() => {
        const purchasesData:purchase[] = []
        userPurchases.forEach(purchase => {
            const formattedPurchase = {
                id: purchase.id,
                data: purchase.data()
            }
            purchasesData.push(formattedPurchase)
        });
        return purchasesData
    }, [userPurchases.length])

    const GetPurchase = () =>{
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

    const handleSetPurchase = (selectedPurchase:purchase) =>{
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
                            rows={userPurchasesData}
                            headCells={purchasesHeadCells}
                            viewDetail='View purchase'
                            onClickViewDetail={handleSetPurchase}
                        />
                    </DarkThemeContainerMUI>
                </div>
            }

            <ModalMUI
                open={!!purchase?.id}
                handleClose={cleanPurchase}
            >
                <DarkThemeContainerMUI>
                    <Purchase
                        purchase={purchase.data}
                        cleanPurchase={cleanPurchase}
                    />
                </DarkThemeContainerMUI>
            </ModalMUI>
        </div>
    )
}

export default PurchaseContainer