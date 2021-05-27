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
import {purchaseStates} from "../General/constants/strings";
import SuccessPurchase from "./SuccessPurchase";
import NavButtons from '../General/NavButtons/NavButtons'



const BuyForm =({buy,user})=>{

    let history = useHistory();
    const [dataCont] = useContext(Store);

    const [withoutStock, setWithoutStock] = useState([]);

    const [approved, setApproved] = useState(false);

    const [waiting, setWaiting] = useState(true)

    const [step, setStep] = useState('userdata')

    const {register, handleSubmit, errors,watch, control} = useForm();

    const countFees = watch("countFees", "one")

    const name = watch("name","") 

    const surname = watch("surname","") 

    const email = watch("email","")

    const confEmail = watch("confemail","")

    const phone = watch("phone","")

    const cardNumber = watch("card_number","")

    const [completed, setCompleted] = useState(false)
    const [purchaseId, setPurchaseId] = useState('')

    const [userData, setUserData] = useState({
        name:'',
        lastName:'',
        email:'',
        confEmail:'',
        phone:'',
        cardNumber:''
    })

    const hasError = inputField => (errors && errors[inputField]);

    const handleBack=()=>{
        if (step==='paydata'){
            setStep('userdata')
        }
    }

    const handleNext=()=>{
        if (step==='userdata'){
            setUserData(
                {
                    name:name,
                    surname:surname,
                    email:email,
                    confEmail:confEmail,
                    phone:phone,
                    cardNumber:cardNumber
                }
            )
            console.log(userData)
            setStep('paydata')
        }
    }

    const onSubmit = data => {
        data.name = userData.name
        data.surname = userData.surname
        data.email = userData.email
        data.phone = userData.phone
        data.card_number = userData.cardNumber
        data.items = dataCont.items
        data.total = dataCont.total
        data.countFees = GetCountFeesValue(countFees)
        data.fee = GetFeeValue(dataCont.total,countFees)
        data.date = Date.now()
        data.state = purchaseStates.generated
        data.iduser = user.uid
        console.log(data)
        setCompleted(true)
        buy(data,setPurchaseId,setWithoutStock,setApproved,setWaiting)
    }

    if (dataCont.items.length==0 && !completed){
        history.push("/")
    }

    return(
        <>
            {
                !completed
                ?
                    <div className='buy-main'>
                        <form noValidate className='form'
                              onSubmit={handleSubmit(onSubmit)}>
                            <article >
                            {
                                step === 'userdata'
                                ?
                                <>
                                <span className='section-title'>Datos del comprador</span>
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
                                        defaultValue={userData.name}
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
                                        defaultValue={userData.surname}
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
                                        defaultValue={userData.email}
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
                                        defaultValue={userData.confEmail}
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
                                        defaultValue={userData.phone}
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
                                        defaultValue={userData.cardNumber}
                                        error={hasError("card_number")}
                                        helperText={hasError("card_number") && errors.card_number.message}
                                    />
                                </section>
                                <section className='padding-10'>
                                    <NavButtons 
                                        textBack='' 
                                        textNext='Siguiente'
                                        clickNext={handleNext}
                                    />
                                </section>
                                </>
                                    :
                                    null
                                }
                                {
                                    step === 'paydata'
                                    ?
                                    <section className='pay'>
                                    <FormLabel component="legend">Cantidad de pagos: </FormLabel>
                                    <RadioGroup aria-label="gender" defaultValue={countFees} >
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
                                    <section className='padding-10'>
                                        <NavButtons 
                                            textBack='Volver' 
                                            textNext='Finalizar compra'
                                            clickBack={handleBack}
                                            type='Submit'
                                        />
                                    </section>
                                </section>
                                    :
                                    null
                                }
                            </article>


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
                                            approved && purchaseId !== ''
                                                ?
                                                <SuccessPurchase purchaseId={purchaseId} />
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