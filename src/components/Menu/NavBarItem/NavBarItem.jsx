import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import React from "react";
import {BlueButton} from "../../General/Buttons";
import PersonIcon from '@material-ui/icons/Person';


const NavBarItem = ({name, myclass, url = "#", logout}) => {

    let history = useHistory();

    const goHeading =()=> {
        history.push(url)
    }

    const onHandkeClick=()=>{
        if (myclass ==='logout'){
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
                    <CardActionArea onClick={onHandkeClick}>
                        {
                            myclass ==='user'
                            ?
                            <div className='usernav'>
                                <span className='heading'>{name}&nbsp;</span><PersonIcon />
                            </div>
                            :
                            <span className='heading'>{name}</span>
                        }
                    </CardActionArea>

            }
        </li>
    )
}

export default NavBarItem;