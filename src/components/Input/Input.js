import { Button, InputBase, Paper, IconButton } from '@material-ui/core';
import React, { useState, useContext, useEffect, useRef } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { dataContext } from '../../contexts/dataContext';

const Input = ({ setOpen, listId, type, open }) => {
  const classes = useStyle();
  const [title, setTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const { AddToCards, AddToLists } = useContext(dataContext);
  const inputFocus = useRef();

  useEffect(() => {
    if (open && !cardDescription) {
      console.log(open);
      inputFocus.current.focus();
    }
  });

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

  const handleBtnClear = () => {
    setOpen(false);
    setTitle('');
    setCardDescription('');
  };

  const handleBlur = (e) => {
    if (!title && !cardDescription) {
      const currentTarget = e.currentTarget;
      // Check the newly focused element in the next tick of the event loop
      setTimeout(() => {
        // Check if the new activeElement is a child of the original container
        if (!currentTarget.contains(document.activeElement)) {
          setTitle('');
          setCardDescription('');
          setOpen(false);
        }
      }, 0);
    }
  };

  return (
    <div onBlur={handleBlur}>
      <div className="inputContainer">
        <Paper className={classes.titleCard}>
          <InputBase
            inputRef={inputFocus}
            onChange={handleTitleChange}
            multiline
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            placeholder={
              type === 'list'
                ? 'Enter list title...'
                : 'Enter a title for this card...'
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
              multiline
              fullWidth
              inputProps={{
                className: classes.input,
              }}
              placeholder="Enter a description for this card..."
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
          {type === 'list' ? 'Add List' : 'Add Card'}
        </Button>
        <IconButton onClick={handleBtnClear} className={classes.cancel}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  titleCard: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(0),
    overflow: 'scroll',
  },
  descCard: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(1),
  },
  inputContainer: {
    margin: theme.spacing(10),
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
    width: '150px',
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
    display: 'flex',
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
