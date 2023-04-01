import {useForm} from "react-hook-form";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';
import Typography from "@material-ui/core/Typography";
import {validations} from "../../../Validations";
import {ErrorLabel} from "../../General/Labels";
import {AceptButton} from "../../General/Buttons";
import './SignUp.css'
import Form from "../../General/Form/Form";
import { DarkTextFieldMUI } from "../../General/TextField";
import DarkThemeContainerMUI from "../../General/DarkThemeContainerMui";


const SignUpForm = ({signUp}) => {
    const {register, handleSubmit, errors, watch} = useForm();
    const hasError = inputField => (errors && errors[inputField]);
    const pass = watch("password")

    const [error, setError ] = useState('')

    let history = useHistory();

    const useStyles = makeStyles((theme) => ({
        avatar: {
            backgroundColor: blueGrey[900],
            marginTop: '10px',
        }
    }));

    const classes = useStyles();

    const goSignUp=()=>{
        history.push("/login")
    }

    const onSubmit = data =>{
        signUp(data.email, data.password, setError)
    }

    return (
        <div className='main-view center'>
            <Form 
                onSubmit={handleSubmit(onSubmit)}
                _width={'300px'}
            >
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Registrarme
                </Typography>
                <DarkTextFieldMUI 
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
                    inputRef={register({
                        required: validations.req,
                    })}
                    error={hasError("email")}
                    helperText={hasError("email") && errors.email.message}
                />
                <DarkTextFieldMUI 
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
                <DarkTextFieldMUI 
                    name="password_repeat"
                    label="Repetir contraseña"
                    type="password"
                    id="password_repeat"
                    inputRef={register({
                        required: validations.req,
                        validate: value => value === pass || validations.pass_no_match
                    })}
                    error={hasError("password_repeat")}
                    helperText={hasError("password_repeat") && errors.password_repeat.message}
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
                <DarkThemeContainerMUI>
                    <AceptButton
                        text='Aceptar'
                        type='submit'
                    />
                </DarkThemeContainerMUI>
                </div>
                <span>Posees una cuenta?&nbsp;&nbsp;<span className="underline-when-hover" onClick={goSignUp}>Ingresa aquí</span></span>
            </Form>
        </div>
    )
};

export default SignUpForm;