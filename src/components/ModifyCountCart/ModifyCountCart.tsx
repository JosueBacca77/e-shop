import {GetPlural} from "../../Utils";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import {ErrorLabel} from "../General/Labels";
import {infoStrings} from "../General/constants/strings";
import { DarkTextFieldMUI } from "../General/TextField";
import './ModifyCountCart.css';
import { CartArticleInterface } from "../interfaces/CartArticle.interface";

type ModifyCountCartProps = {
    article: CartArticleInterface,
    handleChangeCount:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    handleAddCart:()=>void,
    handleClose?:()=>void,
    countAdded:number
}

const ModifyCountCart =({article,handleChangeCount,handleAddCart,handleClose=null,countAdded}:ModifyCountCartProps)=>{

    return(
        <div>
            <article className='center'>
                <DarkTextFieldMUI
                    type='number'
                    variant="outlined"
                    margin="normal"
                    label={`${GetPlural(article.data.unit)} to add to the cart`}
                    onChange={handleChangeCount}
                />

                <div className="addToCartIcon">
                    <IconButton color="inherit" sx={{ width:'60px', height:'60px' }} onClick={handleAddCart}>
                        <AddShoppingCartIcon sx={{ color: "blue" }} />
                    </IconButton>
                </div>

                {
                    handleClose !== null
                    ?
                    <IconButton color="inherit" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    :null
                }

            </article>
            <div className="out-of-stock">
                {countAdded>=article.data.stock
                    ?
                    <ErrorLabel
                        text={infoStrings.stockOut}
                    />
                    :null}
            </div>
        </div>
    )
}

export default ModifyCountCart