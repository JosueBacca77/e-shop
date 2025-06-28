import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Grow from "@mui/material/Grow";

const useStyles = styled('div')(() => ({
    root: {
        position: 'fixed',
        right: '4vw',
        bottom: '3vw',
        zIndex: 9
    },
}));

const ActionAlert =({text, showAlert, setShowAlert})=> {

    const StyledDiv = useStyles;

    const handleClose =()=>{
        setShowAlert(false);
    }

    return (
        <StyledDiv>
            <Grow
                in={showAlert}
                {...(showAlert ? { timeout: 800 } : {})}
            >
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {text}
                </Alert>
            </Grow>
        </StyledDiv>
    );
}

export default ActionAlert