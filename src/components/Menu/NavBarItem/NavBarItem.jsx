import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import React from "react";

const NavBarItem = ({name, url = "#"}) => {

    let history = useHistory();

    const goHeading =()=> {
        history.push(url)
    }

    return (
        <li>
            <CardActionArea onClick={goHeading}>
                <span id='heading' >{name}</span>
            </CardActionArea>

        </li>
    )
}

export default NavBarItem;