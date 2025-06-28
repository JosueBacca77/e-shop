import {useContext} from "react";
import './UserForm.css'
import {useForm} from "react-hook-form";
import {Store} from "../../Store";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
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

type FormData = {
    countFees: string;
}

const PayForm =({buy,user,clickBack,userdata}:PayFormTypes)=>{

    const [dataCont] = useContext(Store);

    const {register, handleSubmit, watch} = useForm<FormData>({
        defaultValues: {
            countFees: "one"
        }
    });

    const countFees = watch("countFees", "one")

    const onSubmit = (data: FormData) => {
        const sale: SaleInterface = {
            items: dataCont.items,
            total: dataCont.total,
            countFees: GetCountFeesValue(data.countFees),
            fee: GetFeeValue(dataCont.total, data.countFees),
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
                <RadioGroup 
                    aria-label="payment-fees" 
                    defaultValue={countFees}
                    {...register("countFees")}
                >
                    <div>
                        <FormControlLabel 
                            value="one"
                            control={<Radio/>} 
                            label="One payment"
                        />
                        <FormControlLabel 
                            value="three"
                            control={<Radio/>}
                            label="3"
                        />
                        <FormControlLabel 
                            value="six"
                            control={<Radio/>}
                            label="6"
                        />
                        <FormControlLabel 
                            value="twelve"
                            control={<Radio/>}
                            label="12"
                        />
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