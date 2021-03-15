import React from 'react';
import DataContextProvider from './contexts/dataContext';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <DataContextProvider>
      <div className="background">
        <Header />
        <Board />
        <Footer />
      </div>
    </DataContextProvider>
  );
}

export default App;
