import React from 'react';
import DataContextProvider from './contexts/dataContext';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <DataContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Board />
        <Footer />
      </ThemeProvider>
    </DataContextProvider>
  );
}

export default App;
