import './Nav.css';
import SearchAppBar from "./Search";
import {rubros} from "../../constants";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBar =()=> {

    return(
        <header>
            <div className='header'>
                <div className='titlecontainer'>
                    <p className='title'>electronic-Shop</p>
                </div>
                <div className='inputs'>
                    <div className='busc'>
                        <SearchAppBar />
                    </div>
                    <nav >
                        <ul>
                            {rubros.map(rubro => (
                                <NavBarItem name={rubro.name} url={rubro.url} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar;