import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";



const CardArticle =(name, description, image)=> {

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
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <IconButton color="inherit" >
                    <AddShoppingCartIcon className={classes.addcart}/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CardArticle;