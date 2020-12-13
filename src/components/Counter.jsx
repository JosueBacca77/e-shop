import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Counter = ({add,substract,count}) => {

    const useStyles = makeStyles({
        icon:{
            color: "blue"
        },
    });

    const classes = useStyles();

    return(
        <div>
            <IconButton color="inherit" >
                <RemoveIcon className={classes.icon} onClick={substract} />
            </IconButton>
            <span>{count}</span>
            <IconButton color="inherit" >
                <AddIcon className={classes.icon} onClick={add}/>
            </IconButton>
        </div>
    )
}

export default Counter;