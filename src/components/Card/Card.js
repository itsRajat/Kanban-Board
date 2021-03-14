import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(1, 2, 1, 2),
    margin: theme.spacing(1.5, 1),
    border: '2px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,1)',
    position: 'relative',
    zIndex: 100,
    overflow: 'hidden',
    backdropFilter: 'blur(1px)',
    WebkitBackdropFilter: 'blur(10px)',
    '&:active': {
      transform: 'rotate(8deg)',
    },
  },
  cardTitle: {
    fontWeight: '1000',
    fontSize: 20,
  },
  cardDesc: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7a7a7a',
  },
}));

const Card = ({ card, index }) => {
  const classes = useStyle();

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.cardContainer}>
            <div className={classes.cardTitle}>{card.title}</div>
            <div className={classes.cardDesc}>{card.desc}</div>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
