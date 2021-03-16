import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import Headshake from 'react-reveal/HeadShake';

const Card = ({ card, index }) => {
  const classes = useStyle();

  return (
    <Draggable draggableId={card.id} index={index} key={card.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.cardContainer}>
            <Headshake>
              <div className={classes.cardTitle}>
                {card.title.toUpperCase()}
              </div>
              <div className={classes.cardDesc}>{card.desc}</div>
            </Headshake>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

const useStyle = makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(1, 2, 1, 2),
    margin: theme.spacing(1.5, 1),
    border: '2px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,1)',
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
    backdropFilter: 'blur(1px)',
    WebkitBackdropFilter: 'blur(10px)',
    '&:active': {
      transform: 'rotate(8deg)',
    },
  },
  cardTitle: {
    fontWeight: '1000',
    fontSize: 14,
  },
  cardDesc: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7a7a7a',
  },
}));

export default React.memo(Card);
