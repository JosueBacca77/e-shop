import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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

    return(
        <div>
            <IconButton color="inherit" disabled={count <= leastAble || disabled} onClick={handleSubstract} >
                <RemoveIcon sx={{ color: count <= leastAble ? "lightgray" : "blue" }} />
            </IconButton>
            <span>{count}</span>
            <IconButton color="inherit" disabled={count===limit || disabled} onClick={handleAdd}>
                <AddIcon sx={{ color: count===limit ? "lightgray" : "blue" }} />
            </IconButton>
        </div>
    )
}

export default Counter;