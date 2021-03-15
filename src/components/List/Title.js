import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';

const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title ? title : 'List');
  const { updateListTitle } = useContext(dataContext);
  const classes = useStyle();

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleChange}
            autoFocus
            value={newTitle}
            inputProps={{ className: classes.input }}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title ? title : 'List'}
          </Typography>
        </div>
      )}
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  editableTitle: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    color: 'white',
    wordWrap: 'break-word',
  },
  input: {
    margin: theme.spacing(1),
    borderRadius: '10px',
    padding: theme.spacing(2),
    '&:focus': {
      background: 'rgba(51, 51, 51, 0.5)',
      color: 'white',
      fontSize: '1rem',
    },
  },
}));

export default Title;
