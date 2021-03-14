import React, { useState, useContext } from 'react';
import { Collapse, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputCard from './Input';
import { dataContext } from '../../contexts/dataContext';

const InputContainer = ({ listId, type }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [clear, setClear] = useState(false);
  const { store, setData } = useContext(dataContext);

  React.useEffect(() => {
    if (clear === true) {
      localStorage.clear();
      setData(store);
      store.lists['list-1'].cards = [];
    }
    return setClear(false);
  }, [clear, store, setData]);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Button
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography className={classes.buttonText}>
            {type === 'list' ? 'Add a list' : 'Add a Card'}
          </Typography>
        </Button>
        {type === 'list' ? (
          <Button
            onClick={() => setClear(true)}
            className={classes.clearButton}
            elevation={0}
          >
            <Typography className={classes.buttonText}>Clear All</Typography>
          </Button>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  addCard: {
    padding: theme.spacing(1, 2, 1, 1),
    width: '92%',
    margin: theme.spacing(0, 1, 1, 1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  clearButton: {
    padding: theme.spacing(1, 2, 1, 1),
    width: '92%',
    margin: theme.spacing(0, 1, 1, 1),
    background: 'linear-gradient(45deg, #131313 30%, #292828 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
    opacity: '50%',
  },
  buttonText: {
    fontSize: '1.7vh',
  },
}));

export default InputContainer;
