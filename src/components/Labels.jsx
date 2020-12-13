import Typography from "@material-ui/core/Typography";


const ErrorLabel =({text})=>{
    return(
        <Typography color='error' component="span">
            {text}
        </Typography>
    )
}

export {ErrorLabel}