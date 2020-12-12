import './CartdArticle.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownCircleSharpIcon from "@material-ui/icons/ArrowDropDownCircleSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const CardArticle =({article,count,add,substract})=> {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            borderRadius: '5px',
        },
        media: {
            height: 300,
        },
        actions:{
            display: "inline-block",
            float: 'right',
        },
        addcart:{
            color: "blue"
        }
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
            <CardActions className={classes.actions}>
                <IconButton color="inherit" >
                    <ArrowDropDownCircleSharpIcon onClick={substract} />
                </IconButton>
                <IconButton color="inherit" >
                    <AddShoppingCartIcon className={classes.addcart} onClick={add}/>
                </IconButton>
                <div>
                    {count}
                </div>
            </CardActions>
        </Card>
    )
}
export default CardArticle;