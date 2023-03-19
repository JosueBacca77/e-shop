import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Counter = ({limit,count,setCount,disabled, leastAble=0}) => {

    const handleAdd =()=>{
        if (count < limit){
            setCount(count+1)
        }
    }

    const handleSubstract =()=>{
        if (count>leastAble){
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
            <IconButton color="inherit" disabled={count <= leastAble || disabled} onClick={handleSubstract} >
                <RemoveIcon className={count <= leastAble?classes.iconDiabled:classes.icon}/>
            </IconButton>
            <span>{count}</span>
            <IconButton color="inherit" disabled={count===limit || disabled} onClick={handleAdd}>
                <AddIcon className={count===limit?classes.iconDiabled:classes.icon} />
            </IconButton>
        </div>
    )
}

export default Counter;