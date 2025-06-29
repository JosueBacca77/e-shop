import {useForm} from "react-hook-form";
import {useState, Dispatch, SetStateAction} from "react";
import {validations} from '../../../Validations'
import {ErrorLabel} from "../../General/Labels";
import {AceptButton} from "../../General/Buttons";
import './Login.css'
import {useNavigate} from "react-router-dom";
import Form from "../../General/Form/Form";
import { DarkTextFieldMUI } from "../../General/TextField";
import { IconEShop } from "../../General/Icons";

type LogInFormProps = {
    logIn: (email:string, password:string, setError:Dispatch<SetStateAction<string>>)=> void
}

type FormData = {
    email: string;
    password: string;
}

const LoginForm = ({logIn}: LogInFormProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<FormData>();
    const hasError = (inputField: keyof FormData) => !!errors[inputField];
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const goSignUp=()=>{
        navigate("/signup")
    }

    const onSubmit = (data: FormData) => {
        logIn(data.email, data.password, setError);
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
                    {...register("email", {
                        required: validations.req,
                        pattern: validations.email
                    })}
                    error={hasError("email")}
                    helperText={hasError("email") && errors.email?.message}
                />
                <DarkTextFieldMUI 
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...register("password", {
                        required: validations.req,
                    })}
                    error={hasError("password")}
                    helperText={hasError("password") && errors.password?.message}
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
                        onClick={null}
                    />
                </div>
                <span>Don't have an account yet?&nbsp;&nbsp;<span className="underline-when-hover" onClick={goSignUp}>Sign up now</span></span>
            </Form>
        </div>
    )
};

export default LoginForm;