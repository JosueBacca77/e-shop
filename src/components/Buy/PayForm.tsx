import {useContext} from "react";
import './UserForm.css'
import {useForm} from "react-hook-form";
import {Store} from "../../Store";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {GetCountFeesValue, GetFeeValue} from "../../Utils";
import {purchaseStates} from "../General/constants/strings";
import NavButtons from '../General/NavButtons/NavButtons'
import { UserSaleTypes } from "./BuyTypes";
import { FirebaseUserInterface } from "../interfaces/FirebaseUser.interface";
import { SaleInterface } from "../interfaces/Sale.interface";

type PayFormTypes = {
    buy: (data: SaleInterface)=>void,
    user: FirebaseUserInterface,
    clickBack: ()=>void,
    userdata: UserSaleTypes
}

const PayForm =({buy,user,clickBack,userdata}:PayFormTypes)=>{

    const [dataCont] = useContext(Store);

    const {register, handleSubmit, watch} = useForm();

    const countFees = watch("countFees", "one")

    const onSubmit = () => {
        const sale: SaleInterface = {
            items: dataCont.items,
            total: dataCont.total,
            countFees: GetCountFeesValue(countFees),
            fee: GetFeeValue(dataCont.total,countFees),
            date: Date.now(),
            state: purchaseStates.generated,
            iduser: user.uid,
            card_number: userdata.card_number,
            confemail: userdata.confemail,
            email: userdata.email,
            name: userdata.name,
            surname: userdata.surname,
            phone: userdata.phone
        }
        buy(sale);
    }

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