import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import green from "@material-ui/core/colors/green";
import {fade} from "@material-ui/core/styles";
import {indigo} from "@material-ui/core/colors";


const GreenButton =({text,type='',onClick})=> {

    const useStyles = makeStyles(() => ({
        containedGreen: {
            color: "white",
            backgroundColor: green[500],
            "&:hover": {
                backgroundColor: green[700],
            },
        },
    }));

    const classes = useStyles();

    return(
        <Button
            className={classes.containedGreen}
            variant="contained"
            type={type}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

const AceptButton =({text,type='',onClick})=> {

    const useStyles = makeStyles(() => ({
        containedGreen: {
            color: "white",
            backgroundColor: indigo[500],
            "&:hover": {
                backgroundColor: indigo[700],
            },
        },
    }));

    const classes = useStyles();

    return(
        <Button
            className={classes.containedGreen}
            variant="contained"
            type={type}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

const BlueButton =({text,type='',onClick})=> {

    const useStyles = makeStyles((theme) => ({
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            width: "100%",
            height: '35px',
            fontWeight: "bold",
        },
        color:{
            color: fade(theme.palette.info.light, 0.90),
            backgroundColor:  fade(theme.palette.common.black, 0.55),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.40),
                color: fade(theme.palette.info.light, 0.50),
            },
            fontWeight:'bold'
        }
    }));

    const classes = useStyles();

    return(
        <div className={classes.search}>
            <Button
                className={classes.color}
                variant="contained"
                type={type}
                onClick={onClick}
            >
            {text}
            </Button>
        </div>
    )
}

export {GreenButton,BlueButton,AceptButton}