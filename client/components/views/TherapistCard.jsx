import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Button} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '25rem',
    margin: 'auto',
    padding: '1rem'
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
  let specialties = [];

  const specialtyOptions = {
    "Impostor Syndrome": therapist.impostor_syndrome, 
    "LGBTQIA Issues": therapist.lgbtqia_issues, 
    "Marriage Counseling": therapist.marriage_counseling, 
    "Childhood Trauma": therapist.childhood_trauma, 
    "Substance Abuse": therapist.substance_abuse, 
    "Mental Health": therapist.mental_health
  };
  for (const el in specialtyOptions) {
    if (specialtyOptions[el] === true) {
      specialties.push(el);
    }
  }

  return (
    <div>
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <h3>Therapist</h3>
        <div><b>Name:</b> {name}</div>
        <div><b>Gender:</b> {therapist.gender}</div>
        <div><b>Email:</b> {therapist.email}</div>
        <div><b>Specialties:</b>
          {specialties.map((option) => (
            <div key={option} value={option}>
              {option}
            </div>
          ))}
        </div>
        <Button variant="contained" color="primary">Contact</Button>
      </CardContent>
    </Card>
    <br/>
    </div>
  );
}
