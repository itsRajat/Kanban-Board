import { Button, InputBase, Paper, IconButton } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, fade } from '@material-ui/core/styles';
import storeApi from '../../utils/storeApi';

const InputCard = ({ setOpen, listId, type }) => {
  const classes = useStyle();
  const [title, setTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const { addMoreCard, addMoreList } = useContext(storeApi);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setCardDescription(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === 'list') {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    } else {
      addMoreCard(title, cardDescription, listId);
      setTitle('');
      setCardDescription('');
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
            height="0%"
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
        <IconButton onClick={() => setOpen(false)}>
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
    height: '2.8rem',
  },
  descCard: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
    height: '5rem',
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: '#5AAC44',
    color: '#fff',
    '&:hover': {
      background: fade('#5AAC44', 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default InputCard;
