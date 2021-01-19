import './NavBarItem.css'
import {Link} from "react-router-dom";

const NavBarItem = ({name, url = "#"}) => {
    return (
        <li>
            <Link to={url}>
                <a id='heading' href={url}>{name}</a>
            </Link>

        </li>
    )
}

export default NavBarItem;