import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDesc: {
    // padding: theme.spacing(1, 1, 1, 2),
    // margin: theme.spacing(1),
    fontSize: 13,
  },
}));

const Card = ({ card }) => {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.cardContainer}>
        <Typography className={classes.cardTitle}>{card.title}</Typography>
        <Typography className={classes.cardDesc}>{card.desc}</Typography>
      </Paper>
    </div>
  );
};

export default Card;
