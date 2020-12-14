import './CartdArticle.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {infoStrings} from "../../constants/strings";
import {ErrorLabel} from "../Labels";
import Counter from "../Counter";
import {useState} from "react";


const CardArticle =({article})=> {

    const [stop, setStop] = useState(false);

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
        actions:{
            display: "flex",
            justifyContent: "space-between",
        },
        addToCart:{
            float: "right",
        },
    });

    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={article.image}
                    title={article.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {article.name}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        {article.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions} >
                <Counter
                    limit={article.stock}
                    setStop={setStop}
                />
                <div className={classes.addToCart}>
                    <IconButton color="inherit" className={classes.addToCart}>
                        <AddShoppingCartIcon className={classes.icon} />
                    </IconButton>
                </div>
            </CardActions>
            {stop
                ?
                <ErrorLabel
                    text={infoStrings.stockOut}
                />
                :null}
        </Card>
    )
}
export default CardArticle;