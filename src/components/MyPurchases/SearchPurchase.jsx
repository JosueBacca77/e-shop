import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from "react";
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import "./SearchPurchase.css"
import { styled } from '@mui/material/styles';
import { ErrorLabel } from "../General/Labels";

const useStyles = styled('div')(({ theme }) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    purchCode:{
        width: '90%',
    }
}));

const SearchPurchase=({GetPurchase, show, waiting})=>{

    const StyledDiv = useStyles;

    const [id, setId]= useState("")

    const handleSearch=()=>{
        GetPurchase(id)
    }

    const handleChange=(e)=>{
        setId(e.target.value)
    }

    return(
        <div className='main'>
            <article className="search-purchase">
                <TextField
                    variant="outlined"
                    margin="normal"
                    label='Ingrese su código de compra'
                    onChange={handleChange}
                    sx={{ width: '90%' }}
                />
                <StyledDiv>
                    <IconButton color="primary" onClick={handleSearch}>
                        <Search />
                    </IconButton>
                </StyledDiv>
            </article>
            {
                show && !waiting
                ?
                    <div className='labelerror'>
                        <ErrorLabel text={'ID de compra inexistente'} />
                    </div>
                :
                null
            }
        </div>
        
    )
}

export default SearchPurchase