import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {validations} from '../../../Validations'
import {ErrorLabel} from "../../General/Labels";
import {AceptButton} from "../../General/Buttons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import './Login.css'
import {useHistory} from "react-router-dom";
import Form from "../../General/Form/Form";


const LogInForm = ({logIn}) => {
    const {register, handleSubmit, errors} = useForm();
    const hasError = inputField => (errors && errors[inputField]);
    const [pagState, setPagState ]= useState(true)
    const [error, setError] = useState('')

    let history = useHistory();

    const useStyles = makeStyles((theme) => ({
        avatar: {
            backgroundColor: blueGrey[900],
            marginTop: '10px',
        },
    }));

    const classes = useStyles();

    const goSignUp=()=>{
        history.push("/signup")
    }
    
    const onSubmit = data =>{
        logIn(data.email, data.password, setError)
    }

    return (
        <div className='main-view center'>
            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Ingresar
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
                        pattern: validations.email
                    })}
                    error={hasError("email")}
                    helperText={hasError("email") && errors.email.message}
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
                    autoComplete="current-password"
                    inputRef={register({
                        required: validations.req,
                    })}
                    error={hasError("password")}
                    helperText={hasError("password") && errors.password.message}
                />
                {
                    error !== ''
                        ?
                        <ErrorLabel
                            text={error}
                        />
                        :null
                }
                <div className='button'>
                    <AceptButton
                        text='Aceptar'
                        type='submit'
                    />
                </div>
                <span>Aún no tienes una cuenta?&nbsp;&nbsp;<a href='' onClick={goSignUp}>Registrate ahora</a></span>
            </Form>
        {/* <form className='login-form' noValidate
              onSubmit={handleSubmit(onSubmit)}
        > */}
            
        {/* </form> */}
        </div>
    )
};

export default LogInForm;