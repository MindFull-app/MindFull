import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import { Link, Redirect } from 'react-router-dom';

import SimpleCard from './views/SimpleCard.jsx';

function Home() {

  function clickTherapistMatches () {

  }

  return (
    <div>
      <h1>Welcome to MindFull, user_name</h1>
      <SimpleCard>
      <h4>Fill out your user form</h4>
      <Link to='/form'><Button id="user_form" variant="contained" color="primary">
        Here
      </Button></Link>
      <br/>

      <h4>View therapist matches</h4>
      <Link to='/therapists'><Button id="therapist_matches" variant="contained" color="primary"></Link>
        Here
      </Button>
      <br/>

      <h4>View therapist communications</h4>
      <Button id="therapist_communications" variant="contained" color="primary">
        Here
      </Button>
      </SimpleCard>
    </div>
  );
}

export default Home;
