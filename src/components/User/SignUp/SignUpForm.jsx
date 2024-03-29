import {useForm} from "react-hook-form";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {validations} from "../../../Validations";
import {ErrorLabel} from "../../General/Labels";
import {AceptButton} from "../../General/Buttons";
import './SignUp.css'
import Form from "../../General/Form/Form";
import { DarkTextFieldMUI } from "../../General/TextField";
import DarkThemeContainerMUI from "../../General/DarkThemeContainerMui";
import { IconEShop } from "../../General/Icons";


const SignUpForm = ({signUp}) => {
    const {register, handleSubmit, errors, watch} = useForm();
    const hasError = inputField => (errors && errors[inputField]);
    const pass = watch("password")

    const [error, setError ] = useState('')

    let history = useHistory();

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
                <IconEShop />
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
                        text='Sign up'
                        type='submit'
                    />
                </DarkThemeContainerMUI>
                </div>
                <span>Have an account?&nbsp;&nbsp;<span className="underline-when-hover" onClick={goSignUp}>Log in</span></span>
            </Form>
        </div>
    )
};

export default SignUpForm;