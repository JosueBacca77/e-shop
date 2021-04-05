import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from "react";
import {Search} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import "./SearchPurchase.css"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    purchCode:{
        width: '90%',
    }
}));

const SearchPurchase=({GetPurchase})=>{

    const classes = useStyles();

    const [id,setId]= useState("")

    const handleSearch=()=>{
        GetPurchase(id)
    }

    const handleChange=(e)=>{
        setId(e.target.value)
    }

    return(
        <article className="search-purchase">
            <TextField
                variant="outlined"
                margin="normal"
                label='Ingrese su código de compra'
                onChange={handleChange}
                className={classes.purchCode}
            />
            <div className={classes.root}>
                <IconButton color="primary" onClick={handleSearch}>
                    <Search />
                </IconButton>
            </div>

        </article>
    )
}

export default SearchPurchase