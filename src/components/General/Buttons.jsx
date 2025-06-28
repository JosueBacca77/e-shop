import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import { green } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const GreenButton =({text,type='',onClick})=> {

    const useStyles = styled(Button)(() => ({
        color: "white",
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
        },
    }));

    const StyledButton = useStyles;

    return(
        <StyledButton
            variant="contained"
            type={type}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}

const AceptButton =({text,type='',width='',onClick})=> {

    const useStyles = styled(Button)(() => ({
        color: "#000000",
        backgroundColor: "#ffffff",
        "&:hover": {
            backgroundColor: "#CAC9C3"
        },
        width:width
    }));

    const StyledButton = useStyles;

    return(
        <StyledButton
            variant="contained"
            type={type}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}

const BlueButton =({text,type='',onClick})=> {

    const useStyles = styled('div')(({ theme }) => ({
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            width: "100%",
            height: '35px',
            fontWeight: "bold",
        },
        color:{
            color: alpha(theme.palette.info.light, 0.90),
            backgroundColor:  alpha(theme.palette.common.black, 0.55),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.black, 0.40),
                color: alpha(theme.palette.info.light, 0.50),
            },
            fontWeight:'bold'
        }
    }));

    const StyledDiv = useStyles;

    return(
        <StyledDiv>
            <Button
                sx={{
                    color: (theme) => alpha(theme.palette.info.light, 0.90),
                    backgroundColor: (theme) => alpha(theme.palette.common.black, 0.55),
                    '&:hover': {
                        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.40),
                        color: (theme) => alpha(theme.palette.info.light, 0.50),
                    },
                    fontWeight:'bold'
                }}
                variant="contained"
                type={type}
                onClick={onClick}
            >
            {text}
            </Button>
        </StyledDiv>
    )
}

export {GreenButton,BlueButton,AceptButton}