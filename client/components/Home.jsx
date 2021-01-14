import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';

import SimpleCard from './views/SimpleCard.jsx';

const useStyles = makeStyles({
  title: {
    fontSize: '2.5rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Apple Chancery'
  },
  text: {
    fontFamily:'Open Sans'
  }
});

function Home({user, setUser}) {
  const classes = useStyles();
  const name = user ? `, ${user.first_name}` : '';

  return (
    <div>
      <h1 className={classes.title}>Hello {name}</h1>
      <SimpleCard>
      <h3 className={classes.text}>Fill out your user form</h3>
      <Link to='/form'><Button id="user_form" variant="contained" color="primary">
        Here
      </Button></Link>
      <br/>

      <h3 className={classes.text}>View therapist matches</h3>
      <Link to='/therapists'><Button id="therapist_matches" variant="contained" color="primary">
        Here
      </Button></Link>
      <br/>

      <h3 className={classes.text}>View therapist communications</h3>
      <Button id="therapist_communications" variant="contained" color="primary">
        Here
      </Button>
      </SimpleCard>
    </div>
  );
}

export default Home;
