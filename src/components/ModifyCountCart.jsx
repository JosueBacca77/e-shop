import TextField from "@material-ui/core/TextField";
import {GetPlural} from "../Utils";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloseIcon from '@material-ui/icons/Close';
import {ErrorLabel} from "./General/Labels";
import {infoStrings} from "./General/constants/strings";

const ModifyCountCart =({article,handleChangeCount,handleAddCart,handleClose=null,countAdded})=>{

    const useStyles = makeStyles({
        icon:{
            color: "blue"
        },
        cancelIcon:{
            color: "red",
            marginRight: 10,
        },
        actionToCart:{
            float: "right",
        },
        cartIcon:{
            color: "blue"
        }
    });

    const classes = useStyles();

    return(
        <>
        <article className='add-to-cart'>
            <TextField
                type='number'
                variant="outlined"
                margin="normal"
                label={`${GetPlural(article.unit)} a agregar al carrito`}
                onChange={handleChangeCount}
            />

            <IconButton color="inherit" className={classes.actionToCart}>
                <AddShoppingCartIcon className={classes.icon} onClick={handleAddCart}/>
            </IconButton>
            {
                handleClose !== null
                ?
                    <IconButton color="inherit" className={classes.actionToCart}>
                        <CloseIcon style={{'color':'black'}} onClick={handleClose}/>
                    </IconButton>
                    :null
            }
        </article>
        <div style={{'marginRight':'10%'}}>
            {countAdded>article.stock
                ?
                <ErrorLabel
                    text={infoStrings.stockOut}
                />
                :null}
        </div>
        </>
    )
}

export default ModifyCountCart