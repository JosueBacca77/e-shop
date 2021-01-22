import TextField from "@material-ui/core/TextField";
import React, {useContext, useState} from "react";
import {Button} from "@material-ui/core";
import './BuyForm.css'
import {validations} from "../../Validations";
import {Controller, useForm} from "react-hook-form";
import {Store} from "../../Store";
import {useHistory} from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";



const BuyForm =({buy})=>{

    let history = useHistory();
    const [dataCont] = useContext(Store);

    const {register, handleSubmit, errors,watch, control} = useForm();

    const countFees = watch("countFees", "one")

    const [completed, setCompleted] = useState(false)
    const [salesId, setSalesId] = useState('')

    const hasError = inputField => !!(errors && errors[inputField]);

    const onSubmit = data => {
        data.items = dataCont.items
        data.total = dataCont.total
        data.countFees = countFees
        data.date = Date.now()
        setCompleted(true)
        buy(data,setSalesId)
    }

    if (dataCont.items.length==0 && !completed){
        history.push("/")
    }

    return(
        <>
            {
                !completed
                ?
                    <div >
                        <form className='form' noValidate
                              onSubmit={handleSubmit(onSubmit)}>
                            <section className='fields'>
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
                                        required: validations.req
                                    })}
                                    error={hasError("email")}
                                    helperText={hasError("email") && errors.email.message}
                                />
                                <TextField
                                    type='number'
                                    variant="outlined"
                                    margin="normal"
                                    label='DNI'
                                    className='field dni'
                                    name='dni'
                                    inputRef={register({
                                        maxLength: validations.max_dni,
                                        minLength: validations.min_dni,
                                        required: validations.req
                                    })}
                                    error={hasError("dni")}
                                    helperText={hasError("dni") && errors.dni.message}
                                />
                                <TextField
                                    type='number'
                                    variant="outlined"
                                    margin="normal"
                                    label='Teléfono'
                                    className='field tel'
                                    name='phone'
                                    inputRef={register({
                                        maxLength: validations.max_phone,
                                        required: validations.req
                                    })}
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
                                        required: validations.req
                                    })}
                                    error={hasError("card_number")}
                                    helperText={hasError("card_number") && errors.card_number.message}
                                />
                            </section>
                            <FormLabel component="legend">Cantidad de pagos: </FormLabel>
                            <Controller
                                as={
                                    <RadioGroup aria-label="gender" defaultValue="one" >
                                        <div >
                                                <FormControlLabel inputRef={register} name="countFees" value="one"
                                                                  control={<Radio/>} label="Único pago"/>
                                                <FormControlLabel inputRef={register} name="countFees" value="three"
                                                                  control={<Radio/>}
                                                                  label="3"/>
                                                <FormControlLabel inputRef={register} name="countFees" value="six"
                                                                  control={<Radio/>}
                                                                  label="6"/>
                                                <FormControlLabel inputRef={register} name="countFees" value="twelve"
                                                                  control={<Radio/>}
                                                                  label="12"/>
                                        </div>
                                    </RadioGroup>
                                }
                                name="radioController"
                                control={control}
                            />

                            <div className='button'>
                                <Button variant="contained" type='submit'>
                                    Finalizar compra
                                </Button>
                            </div>
                        </form>
                    </div>
                    :
                    <section className='subtitle' >
                        <p>Tu compra se ha completado!!</p>
                        <p>Tu código de seguimiento es: <span className='important-data'>{salesId}</span> </p>
                    </section>
            }

        </>
    )
}

export default BuyForm