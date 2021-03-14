import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../InputCard/InputContainer';

const useStyle = makeStyles((theme) => ({
  root: {
    // margin: '1rem',
    // padding: '20px 20px 30px 20px',
    // position: 'relative',
    // zIndex: 1,
    // borderRadius: '1rem',
    // boxShadow: '0 6px 16px 0',
    // '&:before': {
    //   content: '""',
    //   display: 'block',
    //   position: 'absolute',
    //   left: 0,
    //   top: 0,
    //   zIndex: 0,
    //   width: '100%',
    //   height: '100%',
    //   clipPath:
    //     'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
    //   borderRadius: '1rem',
    // },
    margin: '1rem',
    padding: '20px 20px 30px 20px',
    position: 'relative',
    // width: '100%',
    // maxWidth: '350px',
    // height: '250px',
    margin: '20px',
    border: '2px solid rgba(255,255,255,0.2)',
    // background: 'rgba(255,255,255,0.4)',
    borderRadius: '10px',
    zIndex: 2,
    overflow: 'hidden',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '2px solid rgba(0,0,0,0.1)',
    background: 'rgba(0,0,0,0.4)',
  },
}));
const List = ({ list }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <Title title={list.title} listId={list.id} />
      {list.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      <InputContainer listId={list.id} />
    </Paper>
  );
};

export default List;
