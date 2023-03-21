import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import {BlueButton} from "../../General/Buttons";
import PersonIcon from '@material-ui/icons/Person';


const NavBarItem = ({name, myclass, url = "#", onHandleNav, currentLocation=''}) => {

    let history = useHistory();

    const goHeading =()=> {
        history.push(url)
    }

    return (
        <li>
            {
                myclass==='signup'
                ?
                    <BlueButton text={name} onClick={goHeading}/>
                :
                    <div onClick={()=>onHandleNav(myclass, url)}>
                        {
                            myclass ==='user'
                            ?
                            <div className='usernav'>
                                <span className={`${currentLocation===name?'selected-heading':'unselected-heading'}`}>{name}&nbsp;</span><PersonIcon />
                            </div>
                            :
                            <span className={`${currentLocation===name?'selected-heading':'unselected-heading'}`}>{name}</span>
                        }
                    </div>
            }
        </li>
    )
}

export default NavBarItem;