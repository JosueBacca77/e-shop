import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {articlesAdded, infoStrings} from "../General/constants/strings";
import {CorrectLabel, ErrorLabel} from "../General/Labels";
import Counter from "../Counter";
import {useContext, useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {GetPlural, VerifyContains} from "../../Utils";
import {Link, useHistory} from "react-router-dom";
import {Store} from "../../Store";


const CardArticle =({article})=> {

    const [count, setCount] = useState(0)
    const [added, setAdded] = useState(false)
    const [data, setData] = useContext(Store)
    console.log(data)

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
        if(count>0 && count <= article.stock ) {
            setAdded(true)
            //si no esta en el cart lo agrego
            if (!VerifyContains(data, article)) {
                setData([...data, {...article, 'count': parseInt(count)}])
            } else {
                //si esta sumo las unidades
                data.map(art => {
                    if (art.id == article.id) {
                        art.count = parseInt(art.count) + parseInt(count)
                    }
                })
            }
            history.push("/cart")
        }
    }

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={article.images[0]}
                    title={article.name}
                />
                <CardContent>
                    <Link to={'/detail/'+article.id} >
                        <Typography gutterBottom variant="h5" component="h2" className={classes.name} >
                            {article.name}
                        </Typography>
                    </Link>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        {article.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions} >
                {
                    <>
                        <Counter
                            limit={article.stock}
                            count={count}
                            setCount={setCount}
                        />
                        <div>
                            <IconButton color="inherit" className={classes.actionToCart}>
                                <AddShoppingCartIcon className={classes.icon} onClick={handleAddCart}/>
                            </IconButton>
                        </div>
                    </>
                }
            </CardActions>
            {count===article.stock && !added
                ?
                <ErrorLabel
                    text={infoStrings.stockOut}
                />
                :null}
        </Card>
    )
}
export default CardArticle;