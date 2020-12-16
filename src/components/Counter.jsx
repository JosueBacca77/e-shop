import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Counter = ({limit,count,setCount}) => {

    const handleAdd =()=>{
        if (count < limit){
            setCount(count+1)
        }
    }

    const handleSubstract =()=>{
        if (count>0){
            setCount(count-1)
        }
    }

    const useStyles = makeStyles({
        icon:{
            color: "blue"
        },
        iconDiabled:{
            color: "lightgray"
        },
    });

    const classes = useStyles();

    return(
        <div>
            <IconButton color="inherit" disabled={count===0} >
                <RemoveIcon className={count===0?classes.iconDiabled:classes.icon}
                            onClick={handleSubstract}
                />
            </IconButton>
            <span>{count}</span>
            <IconButton color="inherit" disabled={count===limit}>
                <AddIcon className={count===limit?classes.iconDiabled:classes.icon} onClick={handleAdd}/>
            </IconButton>
        </div>
    )
}

export default Counter;