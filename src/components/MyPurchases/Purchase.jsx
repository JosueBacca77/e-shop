import './Purchase.css'
import ItemsPurchaseTable from "./ItemsPurchase";
import {getDateFromTimestamp, GetSubtotalItem} from "../../Utils";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DarkThemeContainerMUI from '../General/DarkThemeContainerMui';


const Purchase=({purchase,cleanPurchase})=>{

    const formatItemsForTable =(items)=>{
        let itemsNew = []
        items.forEach(item => {
            itemsNew.push({
                id: item.id,
                name: item.data.name,
                heading: item.data.heading,
                count: item.count,
                price: item.data.price,
                subtotal: GetSubtotalItem(item),
            })
        })
        return itemsNew
    }

    const useStyles = makeStyles({
        icon:{
            color: "white",
        }
    });

    const classes = useStyles();

    return(
        <>
        <form noValidate className='info-purchase-form card'>
            <section className='space-between'>
                <span ><b>Date:&nbsp;&nbsp;</b><span>{getDateFromTimestamp(purchase.date)}</span></span>
                <div className='close-purchase'>
                    <IconButton className={classes.icon} onClick={cleanPurchase}>
                        <KeyboardBackspaceIcon  />
                    </IconButton>
                </div>
            </section>
            <br/>
            <span className='left-align label-section'>Client information</span>
            <section className='info-purchase'>
                <span ><b>Name:&nbsp;&nbsp;</b><span>{purchase.name}</span></span>
                <span ><b>Lastname:&nbsp;&nbsp;</b><span>{purchase.surname}</span></span>
                <span ><b>Email:&nbsp;&nbsp;</b><span>{purchase.email}</span></span>
                <span ><b>Phone:&nbsp;&nbsp;</b><span>{purchase.phone}</span></span>
                <span ><b>Card number:&nbsp;&nbsp;</b><span>{purchase.card_number}</span></span>
            </section>
            <span className='left-align label-section'><b>Payment information</b></span>
            <section className='info-purchase'>
                <span className='purchase-date'><b>Amount of fees&nbsp;&nbsp;</b><span>{purchase.countFees}</span></span>
                <span className='purchase-date'><b>Fee&nbsp;&nbsp;</b><span>$&nbsp;{purchase.fee}</span></span>
                <span className='purchase-date'><b>Total:&nbsp;&nbsp;</b><span>{purchase.total}</span></span>
            </section>
            <span className='left-align label-section'><b>Purchase information</b></span>
            <section className='table-items'>
                <ItemsPurchaseTable
                    rows={formatItemsForTable(purchase.items)}
                />
            </section>
        </form>
        </>
    )
}

export default Purchase