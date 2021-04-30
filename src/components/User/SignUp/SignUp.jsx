import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {validations} from "../../../Validations";
import {ErrorLabel} from "../../General/Labels";
import {AceptButton, GreenButton} from "../../General/Buttons";
import './SignUp.css'
import {useAuth} from '../../../AuthContext'


const SignUp = () => {
    const {register, handleSubmit, errors} = useForm();
    const hasError = inputField => !!(errors && errors[inputField]);
    // const [pagState, setPagState ]= useState(true)

    const {SignUp} = useAuth()

    let history = useHistory();

    const useStyles = makeStyles((theme) => ({
        avatar: {
            backgroundColor: blueGrey[900],
            marginTop: '10px',
        },
    }));

    const classes = useStyles();

    const goSignUp=()=>{
        history.push("/login")
    }

    const onSubmit = data => {
        /*return new Promise((resolve) => {
            console.log("send data")
            console.log(data)
            Customer.autenticate(setPagState,data,history)
            resolve();
        });*/
        console.log("asasas")
    }

    return (
        <div className='main-view center'>
            <form className='signup-form' noValidate
                  onSubmit={handleSubmit(onSubmit)}
            >
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Registrarme
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
                    autoFocus
                    inputRef={register({
                        required: validations.req,
                    })}
                    error={hasError("codcli")}
                    helperText={hasError("codcli") && errors.email.message}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    inputRef={register({
                        required: validations.req,
                    })}
                    error={hasError("password")}
                    helperText={hasError("password") && errors.password.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password_repeat"
                    label="Repetir contraseña"
                    type="password"
                    id="password_repeat"
                    inputRef={register({
                        required: validations.req,
                    })}
                    error={hasError("password")}
                    helperText={hasError("password") && errors.password_repeat.message}
                />
               {/* {
                    pagState !== true
                        ?
                        <ErrorLabel
                            text={pagState.detail}
                        />
                        :null
                }*/}
                <div className='button'>
                    <AceptButton
                        text='Aceptar'
                        type='submit'
                    />
                </div>
                <span>Posees una cuenta?&nbsp;&nbsp;<a href='' onClick={goSignUp}>Ingresa aquí</a></span>
            </form>
        </div>
    )
};

export default SignUp;