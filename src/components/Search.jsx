import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useArticleFilter } from "../ArticleFilterContext";
import { useEffect, useState } from "react";
import useDeferredValue from "../Hooks/useDeferredValue";


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent: "left",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
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
        },
        [theme.breakpoints.down("sm")]: {
            width: "35ch",
        }
    }
}));

export default function SearchAppBar() {

    const classes = useStyles();
    const {setArticleFlter} = useArticleFilter();

    const [inputValue, setInputValue] = useState('');
    const deferredInputValue = useDeferredValue(inputValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        writeSearch(deferredInputValue);
    }, [deferredInputValue])


    const writeSearch =(value)=>{

        const find = new Promise((resolve) => {
            resolve(setArticleFlter(value));
        });
        
        find
        .catch(error=>console.log(error))
    }

    return (
        <div className={classes.root}>
            <Toolbar >
                <div className={classes.search}>
                    <div >
                        <SearchIcon className={classes.searchIcon}/>
                    </div>
                    <InputBase
                        placeholder="What are you looking for?"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleChange}
                    />
                </div>
            </Toolbar>
        </div>
    );
}
