import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

export default function TextInput({id, label, required}) {
  const classes = useStyles();

  return (
    <TextField required id={id} label={label} />
  );
} 