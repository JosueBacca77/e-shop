import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import DarkThemeContainerMUI from "../DarkThemeContainerMui";

const DarkTextFieldMUI=({...props})=>{
    const { id, name, label, autoComplete, inputRef,
        error, helperText, defaultValue, noSelect, type='text', onChange, ref} = props;

    const useStyles = styled(TextField)(() => ({
        input: {
            color:'#ffffff',
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px rgb(31, 30, 30) inset",
              WebkitTextFillColor: '#ffffff',
            },
            userSelect:noSelect?'none':'auto'
        },
    }));

    const StyledTextField = useStyles;

    return(
        <DarkThemeContainerMUI>
            <StyledTextField
                type={type}
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
                inputProps={{ 
                    style: {
                        color:'#ffffff',
                        userSelect:noSelect?'none':'auto'
                    }
                }}
                inputRef={inputRef || ref}
                error={error}
                helperText={helperText}
                onChange={onChange}
            />
        </DarkThemeContainerMUI>
    )
}
export default DarkTextFieldMUI;