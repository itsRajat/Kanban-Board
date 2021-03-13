import './App.css';
import List from './components/List/List';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import StoreApi from './utils/storeApi';
import store from './utils/store';

function App() {
  const [data, setData] = useState(store);
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

  return (
    <StoreApi.Provider value={{ addMoreCard }}>
      <div>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </StoreApi.Provider>
  );
}

export default App;
