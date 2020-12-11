import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";


const Menu =({rubros})=> {

    return(
        <header>
            <div className='header'>
                <p className='title'>electronic-Shop</p>
                <div className='inputs'>
                    <SearchAppBar />
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

export default Menu;