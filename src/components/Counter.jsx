import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Counter = ({limit,setStop}) => {

    const [count, setCount] = useState(0)

    const handleAdd =()=>{
        if (count < limit){
            setCount(count+1)
        }
        if (count === limit){
            setStop(true)
        }
    }

    const handleSubstract =()=>{
        if (count>0){
            setCount(count-1)
        }
        setStop(false)
    }

    const useStyles = makeStyles({
        icon:{
            color: "blue"
        },
    });

    const classes = useStyles();

    return(
        <div>
            <IconButton color="inherit" >
                <RemoveIcon className={classes.icon} onClick={handleSubstract} />
            </IconButton>
            <span>{count}</span>
            <IconButton color="inherit" >
                <AddIcon className={classes.icon} onClick={handleAdd}/>
            </IconButton>
        </div>
    )
}

export default Counter;