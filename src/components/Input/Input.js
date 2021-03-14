import { Button, InputBase, Paper, IconButton } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { dataContext } from '../../contexts/dataContext';

const Input = ({ setOpen, listId, type }) => {
  const classes = useStyle();
  const [title, setTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const { AddToCards, AddToLists } = useContext(dataContext);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setCardDescription(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type !== 'list' && title === '') {
      console.log('Error: You must enter a "Title" to add a card to the list.');
      return;
    }
    if (type === 'list') {
      AddToLists(title);
      setTitle('');
      setOpen(false);
    } else {
      AddToCards(title, cardDescription, listId);
      setCardDescription('');
      setTitle('');
      setOpen(false);
    }
  };

  const handleBlur = () => {
    if (!title && !cardDescription) {
      setTitle('');
      setCardDescription('');
      setOpen(false);
    }
  };

  return (
    <div onBlur={handleBlur}>
      <div>
        <Paper className={classes.titleCard}>
          <InputBase
            onChange={handleTitleChange}
            autoFocus
            multiline
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            placeholder={
              type === 'list'
                ? 'Enter list title...'
                : 'Enter a title of this card...'
            }
            value={title}
          />
        </Paper>
        {type === 'list' ? (
          ''
        ) : (
          <Paper className={classes.descCard}>
            <InputBase
              onChange={handleDescChange}
              autoFocus
              multiline
              fullWidth
              inputProps={{
                className: classes.input,
              }}
              placeholder="Enter some description for this card..."
              value={cardDescription}
            />
          </Paper>
        )}
      </div>
      <div className={classes.confirm}>
        <Button
          className={classes.btnConfirm}
          onClick={() => handleBtnConfirm()}
        >
          {type === 'list' ? 'Add a list' : 'Add a Card'}
        </Button>
        <IconButton onClick={() => setOpen(false)} className={classes.cancel}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  titleCard: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
    height: '60px',
    overflow: 'scroll',
  },
  descCard: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
    fontSize: '14px',
  },
  btnConfirm: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    fontSize: '1.7vh',
    color: 'white',
    minHeight: 48,
    width: '100px',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover': {
      transition: '500ms ease-in-out',
      transform: 'scale(1.05)',
      background: 'linear-gradient(45deg, #d34866 30%, #FF8E53 90%)',
    },
  },
  confirm: {
    margin: theme.spacing(2, 1, 1, 1),
  },
  cancel: {
    marginLeft: '20px',
    padding: '20px 20px',
    color: 'white',
    height: '30px',
    width: '30px',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}));

export default Input;
