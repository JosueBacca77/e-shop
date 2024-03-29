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

type SuccessPurchaseTypes = {
    purchaseId:string
}

const SuccessPurchase = ({purchaseId}: SuccessPurchaseTypes) => {

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
        setShowAlert(true)
    }

    return (
        <section className='success-purchase'>
            <img className={classes.image} src={'Icons/s.png'}/>
            <p className='success-advice'>Your purchase has been done successfully!!</p>
            <p className='label'>Your purchase code is:
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
                                text={purchaseId}
                                onCopy={handleCopy}
                            >
                                <FileCopyIcon />
                            </CopyToClipboard>
                        </div>
                    </Toolbar>
                </div>
            </p>
            <ActionAlert text='Copied!' showAlert={showAlert} setShowAlert={setShowAlert}/>
        </section>
    )
}

export default SuccessPurchase