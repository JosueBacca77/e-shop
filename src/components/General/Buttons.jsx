import {Button} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import green from "@material-ui/core/colors/green";

const GreenButton =({text,type='',onClick})=> {

    const useStyles = makeStyles((theme) => ({
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

export {GreenButton}