import React, {useContext, useState} from "react";
import './UserForm.css'
import {useForm} from "react-hook-form";
import {Store} from "../../Store";
import {useHistory} from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {GetCountFeesValue, GetFeeValue} from "../../Utils";
import {purchaseStates} from "../General/constants/strings";
import NavButtons from '../General/NavButtons/NavButtons'



const PayForm =({buy,user,clickBack,userdata, setCompleted})=>{

    const [dataCont] = useContext(Store);

    const {register, handleSubmit, errors,watch, control} = useForm();

    const countFees = watch("countFees", "one")

    const onSubmit = data => {
        data.items = dataCont.items
        data.total = dataCont.total
        data.countFees = GetCountFeesValue(countFees)
        data.fee = GetFeeValue(dataCont.total,countFees)
        data.date = Date.now()
        data.state = purchaseStates.generated
        data.iduser = user.uid
        data = {...data, ...userdata}
        buy(data)
    }

    // if (dataCont.items.length==0 && !complete){
    //     history.push("/")
    // }

    return(
        <form noValidate className='card pay-card padding-10'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='height-60 payment-section'>
                <span className='label'>Amount of fees: </span>
                <RadioGroup aria-label="gender" defaultValue={countFees} >
                    <div>
                        <FormControlLabel inputRef={register} name="countFees" value="one"
                            control={<Radio/>} label="One payment"/>
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
            </div>
            <div className='height-60'>
            {
                countFees !== "one"
                ?
                <div className='payment-section'>
                    <span className='label'>{`${GetCountFeesValue(countFees)} fees of`}</span>
                    <div>
                        <span className='label'>{'$ '}</span>
                        <span className='total'>{GetFeeValue(dataCont.total,countFees)}</span>
                    </div>
                </div>
                :null
            }
            </div>
            
            <div className='height-60 payment-section'>
                <span className='label'>Total</span>
                <div>
                    <span className='label'>{'$ '}</span>
                    <span className='total'>{`${dataCont.total}`}</span>
                </div>
            </div>
            <section className='height-60 nav-buttons'>
                <NavButtons 
                    textBack='Go back' 
                    textNext='Buy'
                    clickBack={clickBack}
                />
            </section>
        </form>
    )
}

export default PayForm