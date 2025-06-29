import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useArticleFilter } from "../ArticleFilterContext";
import { useEffect, useState } from "react";
import useDeferredValue from "../Hooks/useDeferredValue";

const useStyles = styled('div')(({ theme }) => ({
    root: {
        display:'flex',
        justifyContent: "left",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        width: "100%",
        color: "white",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
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

const SearchContainer = styled('div')(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    color: "white",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  borderRadius: "5px",
  paddingLeft: "2.25rem",
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "40ch",
  },
  [theme.breakpoints.down("sm")]: {
    width: "35ch",
  },
}));

export default function SearchAppBar() {

    const StyledDiv = useStyles;
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
        <StyledDiv>
            <Toolbar >
                <SearchContainer>
                    <div>
                        <StyledSearchIcon />
                    </div>
                    <StyledInputBase
                        placeholder="What are you looking for?"
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleChange}
                    />
                </SearchContainer>
            </Toolbar>
        </StyledDiv>
    );
}
