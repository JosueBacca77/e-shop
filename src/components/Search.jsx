import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useArticleFilter } from "../ArticleFilterContext";


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent: "left",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
       // backgroundColor: fade(theme.palette.common.black, 0.15),
        width: "100%",
        color: "white",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    },
    inputRoot: {
        color: "inherit",
        borderRadius:'5px'
    },
    inputInput: {
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "40ch",
        }
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();

    const {setFilter} = useArticleFilter()

    const writeSearch =(e)=> {
        setFilter(e.target.value)
    }

    return (
        <div className={classes.root}>
            <Toolbar >
                <div className={classes.search}>
                    <div >
                        <SearchIcon className={classes.searchIcon}/>
                    </div>
                    <InputBase
                        placeholder="Qué estás buscando?"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                        onChange={writeSearch}
                    />
                </div>
            </Toolbar>
        </div>
    );
}
