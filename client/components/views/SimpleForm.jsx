import React from "react"
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    display: 'flex',
    width: '30rem'
  },
  btn: {
    width: '20rem'
  }
});

function SimpleForm({children, btn, onFormSubmit}) {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {children}
      </form>
      <Button onClick={onFormSubmit} className={classes.btn} variant="contained" color="primary">
        {btn}
      </Button>
    </>
  );
}

export default SimpleForm;
