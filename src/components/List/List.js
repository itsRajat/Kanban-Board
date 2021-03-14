import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../InputCard/InputContainer';
import { Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    margin: '1rem',
    padding: '20px 20px 10px 20px',
    position: 'relative',
    margin: '20px',
    border: '2px solid rgba(255,255,255,0.2)',
    borderRadius: '10px',
    zIndex: 2,
    overflow: 'hidden',
    WebkitBackdropFilter: 'blur(5px)',
    border: '2px solid rgba(0,0,0,0.1)',
    background: 'rgba(0,0,0,0.4)',
  },
  cardContainer: {
    marginTop: 'theme.spacing(1)',
  },
}));
const List = ({ list }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
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
  );
};

export default List;
