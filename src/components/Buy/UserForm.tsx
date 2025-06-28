import './UserForm.css'
import {validations} from "../../Validations";
import {useForm} from "react-hook-form";
import { AceptButton } from "../General/Buttons";
import { DarkTextFieldMUI } from "../General/TextField";
import { UserSaleTypes } from './BuyTypes';

type UserFormTypes = {
    userdata: UserSaleTypes,
    next: (data: UserSaleTypes)=> void
}

type FormData = {
    name: string;
    surname: string;
    email: string;
    confemail: string;
    phone: string;
    card_number: string;
}

const UserForm =({userdata, next}:UserFormTypes)=>{

    const {register, handleSubmit, formState: { errors }, watch} = useForm<FormData>({
        defaultValues: {
            name: userdata.name,
            surname: userdata.surname,
            email: userdata.email,
            confemail: userdata.confemail,
            phone: userdata.phone,
            card_number: userdata.card_number
        }
    });

    const email = watch("email", userdata.email)

    const hasError = (inputField: keyof FormData) => !!errors[inputField];

    const onSubmit = (data: FormData) => {
        next(data as UserSaleTypes)
    }

    return(
            <form noValidate className='userForm card padding-10'
                onSubmit={handleSubmit(onSubmit)}>
                    <p className='section-title'>Fill your data</p>
                    <section className='fields'>
                        <DarkTextFieldMUI
                            label='Name'
                            name='name'
                            id='name'
                            className='field name'
                            {...register("name", {
                                maxLength: validations.max_name,
                                required: validations.req
                            })}
                            error={hasError("name")}
                            helperText={hasError("name") && errors.name?.message}
                        />
                        <DarkTextFieldMUI
                            label='Last name'
                            className='field surname'
                            name='surname'
                            {...register("surname", {
                                maxLength: validations.max_name,
                                required: validations.req
                            })}
                            error={hasError("surname")}
                            helperText={hasError("surname") && errors.surname?.message}
                        />
                        <DarkTextFieldMUI
                            label='Email'
                            className='field email'
                            name='email'
                            {...register("email", {
                                pattern: validations.email,
                                required: validations.req
                            })}
                            error={hasError("email")}
                            helperText={hasError("email") && errors.email?.message}
                        />
                        <DarkTextFieldMUI
                            label='Confirm Email'
                            className='field conf-email'
                            name='confemail'
                            autoComplete='off'
                            {...register("confemail", {
                                pattern: validations.email,
                                required: validations.req,
                                validate: value => value === email || validations.email_no_match
                            })}
                            error={hasError("confemail")}
                            helperText={hasError("confemail") && errors.confemail?.message}
                        />
                        <DarkTextFieldMUI
                            type='number'
                            label='Phone'
                            className='field phone'
                            name='phone'
                            {...register("phone", {
                                maxLength: validations.max_phone,
                                required: validations.req
                            })}
                            error={hasError("phone")}
                            helperText={hasError("phone") && errors.phone?.message}
                        />
                        <DarkTextFieldMUI
                            type='number'
                            label='Card number'
                            className='field card'
                            name='card_number'
                            {...register("card_number", {
                                required: validations.req,
                                validate: value => value.length === 7 || validations.count_digits_card
                            })}
                            error={hasError("card_number")}
                            helperText={hasError("card_number") && errors.card_number?.message}
                        />
                    </section>
                    <section className='padding-10 accept-btn'>
                        <AceptButton
                            text='BUY'
                            type='submit'
                            onClick={null}
                        />
                    </section>
            </form>
    )
}

export default UserForm