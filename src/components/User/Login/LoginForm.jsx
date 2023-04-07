import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {validations} from '../../../Validations'
import {ErrorLabel} from "../../General/Labels";
import {AceptButton} from "../../General/Buttons";
import './Login.css'
import {useHistory} from "react-router-dom";
import Form from "../../General/Form/Form";
import { DarkTextFieldMUI } from "../../General/TextField";
import { IconEShop } from "../../General/Icons";


const LogInForm = ({logIn}) => {
    const {register, handleSubmit, errors} = useForm();
    const hasError = inputField => (errors && errors[inputField]);
    const [error, setError] = useState('')

    let history = useHistory();

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
                <IconEShop />
                <DarkTextFieldMUI 
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
                    inputRef={register({
                        required: validations.req,
                        pattern: validations.email
                    })}
                    error={hasError("email")}
                    helperText={hasError("email") && errors.email.message}
                />
                <DarkTextFieldMUI 
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
                        text='LOG IN'
                        type='submit'
                    />
                </div>
                <span>Don't have an account yet?&nbsp;&nbsp;<span className="underline-when-hover" onClick={goSignUp}>Sign up now</span></span>
            </Form>
        </div>
    )
};

export default LogInForm;