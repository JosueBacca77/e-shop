import Typography from "@mui/material/Typography";


const ErrorLabel =({text})=>{
    return(
        <Typography color='error' component="span" style={{'textAlign':'center'}}>
            {text}
        </Typography>
    )
}

export {ErrorLabel}