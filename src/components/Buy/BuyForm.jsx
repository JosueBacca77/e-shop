import TextField from "@material-ui/core/TextField";
import React, {useContext, useState} from "react";
import './BuyForm.css'
import {validations} from "../../Validations";
import {useForm} from "react-hook-form";
import {Store} from "../../Store";
import {useHistory} from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {GetCountFeesValue, GetFeeValue} from "../../Utils";
import {LinearIndeterminate} from "../General/Progress";
import ErrorStock from "./ErrorStock";
import {GreenButton} from "../General/Buttons";
import {purchaseStates} from "../General/constants/strings";



const BuyForm =({buy})=>{

    let history = useHistory();
    const [dataCont] = useContext(Store);

    const [withoutStock, setWithoutStock] = useState([]);

    const [approved, setApproved] = useState(false);

    const [waiting,setWaiting] = useState(true)

    const {register, handleSubmit, errors,watch, control} = useForm();

    const countFees = watch("countFees", "one")

    const email = watch("email")

    const [completed, setCompleted] = useState(false)
    const [salesId, setSalesId] = useState('')

    const hasError = inputField => !!(errors && errors[inputField]);


    const onSubmit = data => {
        data.items = dataCont.items
        data.total = dataCont.total
        data.countFees = GetCountFeesValue(countFees)
        data.fee = GetFeeValue(dataCont.total,countFees)
        data.date = Date.now()
        data.state = purchaseStates.generated
        setCompleted(true)
        buy(data,setSalesId,setWithoutStock,setApproved,setWaiting)
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
                        <form noValidate className='form'
                              onSubmit={handleSubmit(onSubmit)}>
                            <article className='buy-data' >
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
                                            required: validations.req,
                                        })}
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
                                <section className='pay'>
                                    <FormLabel component="legend">Cantidad de pagos: </FormLabel>
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
                                    <br />
                                    <div className='total important-data'>
                                        <span>{` $ ${dataCont.total}`}</span>
                                    </div>
                                    {
                                        countFees !== "one"
                                            ?
                                            <div>
                                                <span>{`${GetCountFeesValue(countFees)} cuotas de $`}</span>
                                                <span className='total'>{GetFeeValue(dataCont.total,countFees)}</span>
                                            </div>
                                            :null
                                    }

                                </section>
                            </article>

                            <div className='center'>
                                <GreenButton
                                    text='Finalizar compra'
                                    type='submit'
                                />
                            </div>

                        </form>
                    </div>
                    :
                    <div>
                        {
                            waiting
                            ?
                                <LinearIndeterminate />
                                :
                                    <div>
                                        {
                                            approved && salesId !== ''
                                                ?
                                                <section className='subtitle' >
                                                    <p>Tu compra se ha completado!!</p>
                                                    <p>Tu código de seguimiento es: <span className='important-data'>{salesId}</span> </p>
                                                </section>
                                                :
                                                null
                                        }
                                        {
                                            withoutStock.length >0
                                            ?
                                                <ErrorStock articles={withoutStock}/>
                                                :
                                                null
                                        }
                                    </div>
                        }
                    </div>
            }
        </>
    )
}

export default BuyForm