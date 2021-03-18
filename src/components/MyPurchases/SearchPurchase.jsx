import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from "react";
import {Search} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import "./SearchPurchase.css"

const SearchPurchase=({GetPurchase})=>{

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
            />
            <IconButton color="primary" onClick={handleSearch}>
                <Search />
            </IconButton>
        </article>
    )
}

export default SearchPurchase