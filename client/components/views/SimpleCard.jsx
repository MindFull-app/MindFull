import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '30rem',
    margin: 'auto',
    marginTop: '10rem',
    padding: '2rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default function SimpleCard({children}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        {children}
      </CardContent>
    </Card>
  );
}
