import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DarkThemeContainerMUI from "../DarkThemeContainerMui";


const DarkTextFieldMUI=({...props})=>{
    const { id, name, label, autoComplete, inputRef, error, helperText, defaultValue, noSelect} = props;

    const useStyles = makeStyles((theme) => ({
        input: {
            color:'#ffffff',
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px rgb(31, 30, 30) inset",
              WebkitTextFillColor: '#ffffff',
            },
            userSelect:noSelect?'none':'auto'
        },
    }));

    const classes = useStyles();

    return(
        <DarkThemeContainerMUI>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                defaultValue={defaultValue}
                id={id}
                name={name}
                label={label}
                autoComplete={autoComplete}
                autoFocus
                inputProps={{ className: classes.input} }
                inputRef={inputRef}
                error={error}
                helperText={helperText}
            />
        </DarkThemeContainerMUI>
    )
}
export default DarkTextFieldMUI;