import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { infoStrings} from "../General/constants/strings";
import {ErrorLabel} from "../General/Labels";
import Counter from "../Counter";
import {useContext, useState} from "react";
import {VerifyContains} from "../../Utils";
import {Link, useHistory} from "react-router-dom";
import {Store} from "../../Store";
import {AddItemToCart, ModifyCountItem, UpdateTotalCart} from "../../Store/ManageContext";


const CardArticle =({article})=> {

    const [count, setCount] = useState(0)
    const [added, setAdded] = useState(false)
    const [data, setData] = useContext(Store)

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            borderRadius: '5px',
        },
        media: {
            height: 300,
        },
        icon:{
            color: "blue"
        },
        deleteIcon:{
          color: "red"
        },
        actions:{
            display: "flex",
            justifyContent: "space-between",
        },
        actionToCart:{
            float: "right",
        },
        name:{
            color: "blue"
        }
    });

    const classes = useStyles();

    let history = useHistory();

    const handleAddCart =()=>{
        if(count>0 && count < article.data.stock ) {
            setAdded(true)
            //si esta en el cart sumo unidades
            if (VerifyContains(data.items,article)){
                //si esta sumo las unidades
                ModifyCountItem(article.id, count,data,setData)
                //actualizo total carrito
                UpdateTotalCart(data,setData)
            }else{
                //si no esta lo sumo al cart
                AddItemToCart(article,count,data,setData)
                //actualizo total carrito
                UpdateTotalCart(data,setData)
            }
            history.push("/cart")
        }
    }

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`/Images/${article.data.images[0]}`}
                    title={article.data.name}
                />
                <CardContent>
                    <Link to={'/detail/'+article.id} >
                        <Typography gutterBottom variant="h5" component="h2" className={classes.name} >
                            {article.data.name}
                        </Typography>
                    </Link>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        {article.data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions} >
                {
                    <>
                        <Counter
                            limit={article.data.stock}
                            count={count}
                            setCount={setCount}
                        />
                        <div>
                            <IconButton color="inherit" className={classes.actionToCart} onClick={handleAddCart}>
                                <AddShoppingCartIcon className={classes.icon} />
                            </IconButton>
                        </div>
                    </>
                }
            </CardActions>
            {count===article.data.stock && !added
                ?
                <ErrorLabel
                    text={infoStrings.stockOut}
                />
                :null}
        </Card>
    )
}
export default CardArticle;