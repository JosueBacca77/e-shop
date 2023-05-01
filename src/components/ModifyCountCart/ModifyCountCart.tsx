import {GetPlural} from "../../Utils";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloseIcon from '@material-ui/icons/Close';
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

type StylesProps = {
    icon: {
      color: string;
    };
    addIconButtonCart: {
      width: string;
      height: string;
    };
    addToCart: {
      display: string;
      alignItems: string;
      justifyContent: string;
      height: string;
      backgroundColor: string;
      width: string;
    };
  }

const ModifyCountCart =({article,handleChangeCount,handleAddCart,handleClose=null,countAdded}:ModifyCountCartProps)=>{

    const useStyles = makeStyles<StylesProps>(() => ({
        icon:{
            color: "blue"
        },
        addIconButtonCart:{
            width:'60px',
            height:'60px'
        },
        addToCart:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'100%',
            backgroundColor:'pink',
            width:'100px'
        }
    }));

    const classes = useStyles();

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
                    <IconButton color="inherit" className={classes.addIconButtonCart} onClick={handleAddCart}>
                        <AddShoppingCartIcon className={classes.icon} />
                    </IconButton>
                </div>

                {
                    handleClose !== null
                    ?
                    <IconButton color="inherit" className={classes.actionToCart} onClick={handleClose}>
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