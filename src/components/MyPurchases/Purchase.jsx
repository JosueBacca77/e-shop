import './Purchase.css'
import {useState} from "react";
import ItemsPurchaseTable from "./ItemsPurchase";
import {GetSubtotalItem} from "../../Utils";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";


const Purchase=({purchase,cleanPurchase})=>{

    const [date] = useState(new Date(purchase.data.date))

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
            color: "blue",
            '& svg': {
                fontSize: 40
              }
        }
    });

    const classes = useStyles();


    return(
        <>
        <form noValidate className='info-purchase-form'>
            <section className='space-between'>
                <span ><b>Fecha de compra:&nbsp;&nbsp;</b><span>{+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</span></span>
                <div>
                    <IconButton className={classes.icon} onClick={cleanPurchase}>
                            <KeyboardBackspaceIcon  />
                    </IconButton>
                </div>
                
            </section>
            
            <br/>
            <span className='left-align label-section'>Información del cliente</span>
            <section className='info-purchase'>
                <span ><b>Nombre:&nbsp;&nbsp;</b><span>{purchase.data.name}</span></span>
                <span ><b>Apellido:&nbsp;&nbsp;</b><span>{purchase.data.surname}</span></span>
                <span ><b>Email:&nbsp;&nbsp;</b><span>{purchase.data.email}</span></span>
                <span ><b>Teléfono:&nbsp;&nbsp;</b><span>{purchase.data.phone}</span></span>
                <span ><b>Número de tarjeta:&nbsp;&nbsp;</b><span>{purchase.data.card_number}</span></span>
            </section>
            <span className='left-align label-section'><b>Información de pago</b></span>
            <section className='info-purchase'>
                <span className='purchase-date'><b>Cantidad de cuotas&nbsp;&nbsp;</b><span>{purchase.data.countFees}</span></span>
                <span className='purchase-date'><b>Valor de cuota:&nbsp;&nbsp;</b><span>$&nbsp;{purchase.data.fee}</span></span>
                <span className='purchase-date'><b>Total:&nbsp;&nbsp;</b><span>{purchase.data.total}</span></span>
            </section>
            <span className='left-align label-section'><b>Información de la compra</b></span>
            <section className='table-items'>
                <ItemsPurchaseTable
                    rows={formatItemsForTable(purchase.data.items)}
                />
            </section>

        </form>
        </>
    )
}

export default Purchase