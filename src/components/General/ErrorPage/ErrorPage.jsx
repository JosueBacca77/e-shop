import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useLayoutEffect} from "react";


const ErrorPage =({text})=>{

    const useStyles = makeStyles({
        icon: {
            width: 60,
            height: 60,
        },
    })

    const classes = useStyles();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className='main-view'>
            <h1 className='title-not-found'>
                <p>{text}</p>
                <p ><SentimentVeryDissatisfiedIcon className={classes.icon} color='secondary' /></p>
            </h1>
        </div>
    )
}

export default ErrorPage;