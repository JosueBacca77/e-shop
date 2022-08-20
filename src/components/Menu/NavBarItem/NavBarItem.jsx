import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import {BlueButton} from "../../General/Buttons";
import PersonIcon from '@material-ui/icons/Person';


const NavBarItem = ({name, myclass, url = "#", onHandleNav}) => {

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