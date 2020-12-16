import Typography from "@material-ui/core/Typography";


const ErrorLabel =({text})=>{
    return(
        <Typography color='error' component="span">
            {text}
        </Typography>
    )
}

const CorrectLabel =({text})=>{
    return(
        <Typography component="span" style={{'color':'green'}}>
            {text}
        </Typography>
    )
}

export {ErrorLabel,CorrectLabel}