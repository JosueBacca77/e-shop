import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";


const DarkTextFieldMUI=({...props})=>{
    const { id, name, label, autoComplete, inputRef, error, helperText, defaultValue, noSelect} = props;

    const theme = createTheme({
        palette: {
          type: "dark"
        }
    });

    const useStyles = makeStyles((theme) => ({
        input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px rgb(31, 30, 30) inset",
              WebkitTextFillColor: '#ffffff'
            },
            userSelect:noSelect?'none':'auto'
        },
    }));

    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
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
                inputProps={{ className: classes.input }}
                inputRef={inputRef}
                error={error}
                helperText={helperText}
            />
        </ThemeProvider>
    )
}
export default DarkTextFieldMUI;