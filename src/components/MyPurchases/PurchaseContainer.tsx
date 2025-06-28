import {getFireStore} from "../../Data";
import {useLayoutEffect, useMemo, useState} from "react";
import Purchase from "./Purchase";
import {useAuth} from "../../AuthContext"
import SortableTableMUI from "../General/SortableTableMUI";
import DarkThemeContainerMUI from "../General/DarkThemeContainerMui";
import ModalMUI from "../General/ModalMUI";
import { SaleInterface } from "../interfaces/Sale.interface";
import { collection, query, where, getDocs } from 'firebase/firestore';

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
    const [userPurchases, setUserPurchases] = useState([]);

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
                data: purchase.data
            }
            purchasesData.push(formattedPurchase)
        });
        return purchasesData
    }, [userPurchases])

    const GetPurchase = async () => {
        try {
            const salesRef = collection(db, 'Sales');
            const q = query(salesRef, where('iduser', '==', currentUser.uid));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
                const purchases = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }));
                setUserPurchases(purchases);
            } else {
                console.log("No se encontraron compras para este usuario");
            }
        } catch (error) {
            console.log("Error en búsqueda de la compra: ", error);
        }
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
                userPurchases.length > 0 &&
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