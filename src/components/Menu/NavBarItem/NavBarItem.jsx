import './NavBarItem.css'
import {useHistory} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {blue} from "@material-ui/core/colors";
import {BlueButton} from "../../General/Buttons";


const NavBarItem = ({name, myclass, url = "#"}) => {

    const useStyles = makeStyles((theme) => ({
        containedBlue: {
            color: "white",
            backgroundColor: blue[500],
            "&:hover": {
                backgroundColor: blue[700],
            },
        },
    }));

    const classes = useStyles();

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
                    <CardActionArea onClick={goHeading}>
                        <span className='heading'>{name}</span>
                    </CardActionArea>

            }
        </li>
    )
}

export default NavBarItem;