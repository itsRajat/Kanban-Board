import './App.css';
import List from './components/List/List';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import StoreApi from './utils/storeApi';
import store from './utils/store';
import InputContainer from './components/InputCard/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import background from './bg.svg';
import Header from './components/Header';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function App() {
  const [data, setData] = useState(store);
  // JSON.parse(localStorage.getItem('kanban-data')) ??
  const classes = useStyle();

  const addMoreList = (title) => {
    const newListId = nanoid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  const addMoreCard = (title, description, listId) => {
    const newCardId = nanoid();
    const newCard = {
      id: newCardId,
      title,
      desc: description,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    console.log(list.cards);

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    console.log(newState);
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  React.useEffect(() => {
    // localStorage.setItem('kanban-data', JSON.stringify(data));
  }, [data]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log(destination, source, draggableId);

    if (!destination) {
      return;
    }

    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <Header />
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
    </StoreApi.Provider>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${background})`,
    '&:before': {
      backgroundImage: 'linear-gradient(to bottom right,#002f4b,#dc4225)',
      opacity: '0.6',
    },
  },
  lists: {
    display: 'flex',
  },
}));

export default App;
