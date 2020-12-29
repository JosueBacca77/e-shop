import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const ErrorPage =({text})=>{

    const useStyles = makeStyles({
        icon: {
            width: 60,
            height: 60,
        },
    })

    const classes = useStyles();

    return(
        <div className='home'>
            <h1 className='title-not-found'>
                <p>{text}</p>
                <p ><SentimentVeryDissatisfiedIcon className={classes.icon} color='secondary' /></p>
            </h1>
        </div>
    )
}

export default ErrorPage;