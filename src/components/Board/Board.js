import React, { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { dataContext } from '../../contexts/dataContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '../List/List';
import InputContainer from '../Input/InputContainer';

const Board = () => {
  const { data, onDragEnd } = useContext(dataContext);
  const classes = useStyle();

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(provided) => (
            <div
              className={classes.root}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className={classes.lists}>
                {data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  return <List list={list} key={listId} index={index} />;
                })}
                <InputContainer type="list" />
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    // width: '100%',
    backgroundSize: 'cover',
    // backgroundImage: `url(${background})`,
    '&:before': {
      backgroundImage: 'linear-gradient(to bottom right,#002f4b,#dc4225)',
      opacity: '0.6',
    },
  },
  lists: {
    display: 'flex',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 50%',
    },
  },
}));

export default Board;
