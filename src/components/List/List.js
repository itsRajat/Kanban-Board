import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
}));
const List = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <Title />
    </Paper>
  );
};

export default List;
