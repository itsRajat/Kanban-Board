import './App.css';
import List from './components/List/List';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import StoreApi from './utils/storeApi';
import store from './utils/store';
import InputContainer from './components/InputCard/InputContainer';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('kanban-data')) ?? store
  );
  const classes = useStyle();

  const addMoreList = (title) => {
    const newListId = uuid();
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
    const newCardId = uuid();
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
    localStorage.setItem('kanban-data', JSON.stringify(data));
  }, [data]);

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <div className={classes.root}>
        <div className={classes.lists}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />;
          })}
          <InputContainer type="list" />
        </div>
      </div>
    </StoreApi.Provider>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'green',
  },
  lists: {
    display: 'flex',
  },
}));

export default App;
