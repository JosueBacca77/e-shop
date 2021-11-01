import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Grow from "@material-ui/core/Grow";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        position: 'fixed',
        right: '4vw',
        bottom: '3vw',
        zIndex: 1
    },
}));

const ActionAlert =({text, showAlert, setShowAlert})=> {

    const classes = useStyles();

    const handleClose =()=>{
        setShowAlert(false);
    }

    return (
        <div className={classes.root}>
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
        </div>
    );
}

export default ActionAlert