import TextField from "@material-ui/core/TextField";
import React, {useContext} from "react";
import './UserForm.css'
import {validations} from "../../Validations";
import {useForm} from "react-hook-form";
import {Store} from "../../Store";
import NavButtons from '../General/NavButtons/NavButtons'
import { AceptButton } from "../General/Buttons";



const UserForm =({userdata, next})=>{

    const [dataCont] = useContext(Store);

    const {register, handleSubmit, errors, watch, control} = useForm();

    const countFees = watch("countFees", "one")

    const email = watch("email", userdata.confemail)

    const hasError = inputField => (errors && errors[inputField]);

    const onSubmit = data => {
        next(data)
    }

    return(
        <div className='buy-main'>
            <form noValidate className='form'
                onSubmit={handleSubmit(onSubmit)}>
                <article >
                    <span className='section-title'>Ingresa tus datos</span>
                    <section className='fields padding-10'>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label='Nombre'
                            name='name'
                            id='name'
                            className='field name'
                            inputRef={register({
                                maxLength: validations.max_name,
                                required: validations.req
                            })}
                            defaultValue={userdata.name}
                            error={hasError("name")}
                            helperText={hasError("name") && errors.name.message}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label='Apellido'
                            className='field surname'
                            name='surname'
                            inputRef={register({
                                maxLength: validations.max_name,
                                required: validations.req
                            })}
                            defaultValue={userdata.surname}
                            error={hasError("surname")}
                            helperText={hasError("surname") && errors.surname.message}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label='Email'
                            className='field email'
                            name='email'
                            inputRef={register({
                                pattern: validations.email,
                                required: validations.req,
                            })}
                            defaultValue={userdata.email}
                            error={hasError("email")}
                            helperText={hasError("email") && errors.email.message}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label='Confirmar Email'
                            className='field dni'
                            name='confemail'
                            inputRef={register({
                                pattern: validations.email,
                                required: validations.req,
                                validate: value => value === email || validations.email_no_match
                            })}
                            defaultValue={userdata.confemail}
                            error={hasError("confemail")}
                            helperText={hasError("confemail") && errors.confemail.message}
                        />
                        <TextField
                            type='number'
                            variant="outlined"
                            margin="normal"
                            label='Teléfono'
                            className='field conf-email'
                            name='phone'
                            inputRef={register({
                                maxLength: validations.max_phone,
                                required: validations.req
                            })}
                            defaultValue={userdata.phone}
                            error={hasError("phone")}
                            helperText={hasError("phone") && errors.phone.message}
                        />
                        <TextField
                            type='number'
                            variant="outlined"
                            margin="normal"
                            label='Nro. Tarjeta'
                            className='field card'
                            name='card_number'
                            inputRef={register({
                                required: validations.req,
                                validate: value => value.length === 7 || validations.count_digits_card
                            })}
                            defaultValue={userdata.card_number}
                            error={hasError("card_number")}
                            helperText={hasError("card_number") && errors.card_number.message}
                        />
                    </section>
                    <section className='padding-10 accept-btn'>
                        {/* <NavButtons 
                            textBack='' 
                            textNext='Siguiente'
                        /> */}
                        <AceptButton
                            text='Aceptar'
                            type='submit'
                        />
                    </section>
                </article>
            </form>
        </div>
    )
}

export default UserForm