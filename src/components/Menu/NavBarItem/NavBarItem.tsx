import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import {BlueButton} from "../../General/Buttons";
import PersonIcon from '@material-ui/icons/Person';

type NavBarItemProps = {
    name: string, 
    myclass?: string, 
    url?:string, 
    onHandleNav:(myclass?:string, url?:string)=>void, 
    currentLocation?:string
}


const NavBarItem = ({name, myclass, url = "#", onHandleNav, currentLocation=''}: NavBarItemProps) => {

    const history = useHistory();

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
                                <span className={`${currentLocation===name?'selected-heading':'underline-when-hover'}`}>{name}&nbsp;</span><PersonIcon />
                            </div>
                            :
                            <span className={`${currentLocation===name?'selected-heading':'underline-when-hover'}`}>{name}</span>
                        }
                    </div>
            }
        </li>
    )
}

export default NavBarItem;