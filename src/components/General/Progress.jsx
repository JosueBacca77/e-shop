import LinearProgress from "@material-ui/core/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        height: '100%',
        textAlign: 'center'
    },
    green:{
        color: "green"
    },
    
}));

function LinearIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress className={classes.green}  />
        </div>
    );
}

export default function CircularIndeterminate() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CircularProgress 
            className={classes.green} 
        />
      </div>
    );
  }

export {LinearIndeterminate,CircularIndeterminate};