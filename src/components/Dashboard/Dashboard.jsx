import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles( theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid gray'
    },
    chatWindow: {
        width: '70%',
        height: '300px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    },
}));

const Dashboard = () => {

    const classes= useStyles(); 

    return(
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h3">
                    Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                    Topic Placeholder
                </Typography>
                
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>

                    </div>
                    <div className={classes.chatWindow}>
                        
                    </div>
                </div>
                
                <div className={classes.flex}>
                  
                </div>
            </Paper>
        </div>
    )
}

export default Dashboard;