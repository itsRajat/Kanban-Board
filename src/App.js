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

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('kanban-data')) ?? store
  );
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
    localStorage.setItem('kanban-data', JSON.stringify(data));
  }, [data]);

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <Header />
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
