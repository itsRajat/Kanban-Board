import { Button, InputBase, Paper, IconButton } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, fade } from '@material-ui/core/styles';
import storeApi from '../../utils/storeApi';

const InputCard = ({ setOpen, listId }) => {
  const classes = useStyle();
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const { addMoreCard } = useContext(storeApi);

  const handleTitleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setCardDescription(e.target.value);
  };

  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, cardDescription, listId);
    setCardTitle('');
    setCardDescription('');
    setOpen(false);
  };

  const handleBlur = () => {
    if (!cardTitle && !cardDescription) {
      setCardTitle('');
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
            placeholder="Enter a title of this card..."
            height="0%"
            value={cardTitle}
          />
        </Paper>
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
      </div>

      <div className={classes.confirm}>
        <Button
          className={classes.btnConfirm}
          onClick={() => handleBtnConfirm()}
        >
          Add Card
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
