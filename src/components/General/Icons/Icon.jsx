import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import React from "react";


const IconBadge =({icon,count,action})=>{

    return(
        <IconButton color="inherit" onClick={action}>
            <Badge badgeContent={count} color="secondary">
                {icon}
            </Badge>
        </IconButton>
    )
}
export {IconBadge}

