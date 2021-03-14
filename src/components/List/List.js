import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card/Card';
import InputContainer from '../Input/InputContainer';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    margin: '1rem',
    padding: '20px 20px 10px 20px',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1.5px solid rgba(0,0,0,0.1)',
    background: 'rgba(0,0,0,0.4)',
    '@media (max-width: 600px)': {
      width: '50vh',
    },
  },
  cardContainer: {
    marginTop: 'theme.spacing(1)',
  },
}));
const List = ({ list, index }) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <InputContainer listId={list.id} />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default List;
