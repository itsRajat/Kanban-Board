import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    border: '2px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,0.8)',
    position: 'relative',
    // borderRadius: '10px',
    zIndex: 2,
    overflow: 'hidden',
    backdropFilter: 'blur(1px)',
    WebkitBackdropFilter: 'blur(10px)',
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
