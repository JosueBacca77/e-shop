import './SuccessPurchase.css'
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {blue} from "@material-ui/core/colors";
import {fade} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ActionAlert from "../General/Alerts";


const SuccessPurchase = ({purchaseId}) => {

    const [value, setValue] = useState(purchaseId)
    const [copied, setCopied] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const useStyles = makeStyles((theme) => ({
        root: {
            display: "inline-block",
            justifyContent: "left",
        },
        search: {
            position: "relative",
            borderRadius: "8px 0 0 8px",
            width: "100%",
            color: blue[700],
            backgroundColor: fade(theme.palette.common.white, 0.15),
            height: '35px',
            display: "flex",
            alignItems: "center",
        },
        copyId: {
            borderRadius: "0px 8px 8px 0",
            width: "100%",
            color: blue[700],
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
                cursor: 'pointer'
            },
            height: '35px',
            display: "flex",
            alignItems: "center",
        },
        inputRoot: {
            color: "inherit",
            borderRadius:'5px'
        },
        inputInput: {
            paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
            paddingRight: `calc(1em + ${theme.spacing(1)}px)`,
            transition: theme.transitions.create("width"),
            [theme.breakpoints.up("sm")]: {
                width: "22ch",
            }
        },
        image:{
            height: '130px',
            width: '130px',
            marginTop: '2%'
        }
    }));

    const classes = useStyles();

    const handleCopy =()=> {
        setCopied( true)
        setShowAlert(true)
    }

    return (
        <section className='success-purchase'>
            <img className={classes.image} src={'Icons/s.png'}/>
            <p className='success-advice'>Tu compra se ha completado!!</p>
            <p className='label'>Tu código de seguimiento es:
                <div className={classes.root}>
                    <Toolbar >
                        <div className={classes.search}>
                            <InputBase
                                 classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                value={purchaseId}
                                inputProps={{ "aria-label": "search", readOnly: true }}
                            />
                        </div>

                        <div className={classes.copyId}>
                            <CopyToClipboard 
                                text={value}
                                onCopy={handleCopy}
                            >
                                <FileCopyIcon />
                            </CopyToClipboard>
                        </div>
                    </Toolbar>
                </div>
            </p>
            <ActionAlert text='Copiado!' showAlert={showAlert} setShowAlert={setShowAlert}/>
        </section>
    )
}

export default SuccessPurchase