import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import React, {useContext} from "react";
import {BlueButton} from "../../General/Buttons";
import PersonIcon from '@material-ui/icons/Person';
import { Store } from '../../../Store';
import { ClearCart } from '../../../Store/ManageContext';


const NavBarItem = ({name, myclass, url = "#", logout}) => {

    let history = useHistory();

    const [dataCont, setDataCont] = useContext(Store);

    const goHeading =()=> {
        history.push(url)
    }

    const onHandkeClick=()=>{
        if (myclass ==='logout'){
            ClearCart(setDataCont)
            logout()
        }else{
            goHeading()
        }
    }

    return (
        <li>
            {
                myclass==='signup'
                ?
                    <BlueButton text={name} onClick={goHeading}/>
                    :
                    <div onClick={onHandkeClick}>
                        {
                            myclass ==='user'
                            ?
                            <div className='usernav'>
                                <span className='heading'>{name}&nbsp;</span><PersonIcon />
                            </div>
                            :
                            <span className='heading'>{name}</span>
                        }
                    </div>
            }
        </li>
    )
}

export default NavBarItem;