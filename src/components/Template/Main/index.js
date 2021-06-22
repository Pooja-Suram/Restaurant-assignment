import { React } from 'react';
import Tables from '../../Organisms/Tables';
import Items from '../../Organisms/Items';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Main.css';
import Typography from '@material-ui/core/Typography';
import MenuSearch from '../../Atoms/MenuSearch';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: "100%",
    },
}));

const Main = ({ tables, defaultItems, dragStartHandle, dragOverHandle, onSearchHandler, onDropHandle, onClickTable}) => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={3} className="tables-div">
                    <Paper className={classes.paper}>
                        <Typography variant="h4" gutterBottom>
                            Tables
                        </Typography>
                        <Tables tables={tables} dragOverHandle={dragOverHandle} onDropHandle={onDropHandle} onClickTable={onClickTable} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9} className="items-div">
                    <Paper className={classes.paper}>
                        <Typography variant="h4" gutterBottom>
                            Menu
                        </Typography>
                        <MenuSearch onSearchHandler={onSearchHandler} />
                        <Items items={defaultItems} dragStartHandle={dragStartHandle}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Main;