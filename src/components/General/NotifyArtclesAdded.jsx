import Alert from '@material-ui/lab/Alert';
import './Notify.css';
import {articlesAdded} from "./constants/strings";
import {useState} from "react";

const NotifyArtclesAdded =({count,unit,pluralUnit,initShow})=>{

    const [show, setShow] = useState(initShow)
    return(
        <>
        {
            show
            ?
            <Alert onClose={()=>setShow(false)} className='success' severity="info">{articlesAdded(count,unit,pluralUnit)} </Alert>
            :null
        }
        </>
    )
}
export default NotifyArtclesAdded
