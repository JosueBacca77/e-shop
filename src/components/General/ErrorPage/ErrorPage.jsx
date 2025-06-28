import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {useLayoutEffect} from "react";

const ErrorPage =({text})=>{

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className='main-view'>
            <h1 className='title-not-found'>
                <p>{text}</p>
                <p ><SentimentVeryDissatisfiedIcon style={{ width: 60, height: 60 }} color='secondary' /></p>
            </h1>
        </div>
    )
}

export default ErrorPage;