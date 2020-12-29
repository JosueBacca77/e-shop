import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";


const Menu =({headings})=> {

    return(
        <header>
            <div className='header'>

                <Link to='/' >
                    <a className='title'>electronic-Shop</a>
                </Link>
                <div className='inputs'>
                    <SearchAppBar />
                    <nav >
                        <ul>
                            {headings.map(rubro => (
                                <NavBarItem name={rubro.name} url={rubro.url} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Menu;