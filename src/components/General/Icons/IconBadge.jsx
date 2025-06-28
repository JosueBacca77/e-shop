import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";


const IconBadge =({icon,count,action})=>{

    return(
        <IconButton color="inherit" onClick={action}>
            <Badge badgeContent={count} color="secondary">
                {icon}
            </Badge>
        </IconButton>
    )
}
export default IconBadge;