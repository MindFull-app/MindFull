import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '30rem',
    margin: 'auto',
    padding: '2rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default function SimpleCard({therapist}) {
  const classes = useStyles();
  const name = `${therapist.first_name} ${therapist.last_name}`

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <h3>Therapist</h3>
        <div>Name: {name}</div>
        <div>Gender: {therapist.gender}</div>
        <div>Email: {therapist.email}</div>
      </CardContent>
    </Card>
  );
}
