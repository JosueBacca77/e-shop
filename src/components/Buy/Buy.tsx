import {useLayoutEffect, useState} from "react";
import UserForm from "./UserForm";
import PayForm from "./PayForm";
import {getFireStore} from "../../Data";
import { collection, query, where, getDocs, addDoc, documentId } from 'firebase/firestore';
import {useAuth} from "../../AuthContext";
import CircularIndeterminate from "../General/Progress/Progress";
import SuccessPurchase from "./SuccessPurchase"
import ErrorStock from "./ErrorStock"
import {UserSaleTypes} from "./BuyTypes"
import {SaleInterface} from "../interfaces/Sale.interface"
import { ArticleInterface } from "../interfaces/Article.interface";
import { FirebaseDocumentInterface } from "../interfaces/FirebaseDocument.interface";
import { CartArticleInterface } from "../interfaces/CartArticle.interface";

const Buy =()=> {

    const db = getFireStore()

    const {currentUser} = useAuth()
    
    const [waiting, setWaiting] = useState(true)

    const [withoutStock, setWithoutStock] = useState([]);

    const [approved, setApproved] = useState(false);

    const [completed, setCompleted] = useState(false)

    const [purchaseId, setPurchaseId] = useState('')

    const [step, setStep] = useState('userdata')

    const [dataUser, setDataUser] = useState<UserSaleTypes>({
        card_number: '',
        confemail: '',
        email: '',
        name: '',
        surname: '',
        phone: ''
    })

    const handleBack=()=>{
        if (step==='paydata'){
            setStep('userdata')
        }
    }

    const handleNext=(data: UserSaleTypes)=>{
        if (step==='userdata'){
            setDataUser(data)
            setStep('paydata')
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const makeSelling = async (ids: string[], data: SaleInterface) => {

        setWithoutStock([])
        
        try {
            const articlesRef = collection(db, 'Articles');
            const q = query(articlesRef, where(documentId(), 'in', ids));
            const querySnapshot = await getDocs(q);
            
            const arr: FirebaseDocumentInterface<ArticleInterface>[] = [];
            let validStock = true;
            const notstock = [];
            
            querySnapshot.forEach((doc) => {
                arr.push({
                    id: doc.id,
                    data: doc.data() as ArticleInterface
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
                const docRef = await addDoc(collection(db, 'Sales'), data);
                setPurchaseId(docRef.id)
                // ClearCart(setDataCont)
                setApproved(true)
            } else {
                setWithoutStock(notstock)
            }
        } catch (error) {
            console.log(`Error al procesar la compra: ${error}`)
        } finally {
            setWaiting(false)
        }
    };

    const GetIdsFromItems =(items: CartArticleInterface[])=> {
        const ids = []
        for (const item of items){
            ids.push(item.id)
        }
        return ids
    }

    const buy =(data:SaleInterface)=> {
        setCompleted(true)
        const ids = GetIdsFromItems(data.items)
        makeSelling(ids,data)
    }

    return(
        <div className='main-view'>
            <>
            {
                !completed
                ?
                <div className='buy-main'>
                {
                    step==='userdata'
                    ?
                    <UserForm
                        next={handleNext}
                        userdata={dataUser}
                    />
                    :
                    <PayForm 
                        buy={buy}
                        user={currentUser}
                        clickBack={handleBack}
                        userdata={dataUser}
                    />
                }
                </div>
                :
                <div>
                    {
                        waiting
                        ?
                        <CircularIndeterminate />
                        :
                        <div>
                            {
                                approved && purchaseId !== ''
                                    ?
                                    <SuccessPurchase purchaseId={purchaseId} />
                                    :
                                    null
                            }
                            {
                                withoutStock.length >0
                                ?
                                    <ErrorStock articles={withoutStock}/>
                                    :
                                    null
                            }
                        </div>
                    }
                </div>
            }
            </>
        </div>
    )
}

export default Buy