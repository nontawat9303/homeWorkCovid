import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const  Background = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Grid item xs={12}>
                </Grid>
        </div>
    )
}

export default Background;