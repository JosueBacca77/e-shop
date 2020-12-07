import './NavBarItem.css'

const NavBarItem = ({name, url = "#"}) => (
    <li>
        <a href={url}>{name}</a>
    </li>
)

export default NavBarItem;