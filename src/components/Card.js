import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

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
    fontWeight: '600',
  },
  cardDesc: {
    fontSize: 13,
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
