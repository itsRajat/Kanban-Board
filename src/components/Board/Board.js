import React, { useContext, useRef, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { dataContext } from '../../contexts/dataContext';
import { makeStyles } from '@material-ui/core/styles';
import { RootRef } from '@material-ui/core';
import List from '../List/List';
import InputContainer from '../Input/InputContainer';
import Fade from 'react-reveal/Fade';

const Board = () => {
  const { data, onDragEnd } = useContext(dataContext);
  const classes = useStyle();
  const scrollRef = useRef();

  const scrollToEnd = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    scrollToEnd();
  }, [data.listIds.length]);

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Fade left duration={data.listIds.length > 5 ? 0 : 1000}>
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
                  <RootRef rootRef={scrollRef}>
                    <InputContainer type="list" scrollRef={scrollRef} />
                  </RootRef>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Fade>
      </DragDropContext>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    minHeight: '95vh',
    '&:before': {
      backgroundImage: 'linear-gradient(to bottom right,#002f4b,#dc4225)',
      opacity: '0.6',
    },
  },
  lists: {
    display: 'flex',
    width: '100%',
    marginTop: '50px',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 50%',
    },
  },
}));

export default Board;
