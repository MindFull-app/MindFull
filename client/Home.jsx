import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import Header from './components/Header.jsx';

function Home() {
  return (
    <div>
      <Header />

      <h1>Welcome to MindFull, user_name</h1>

      <h4>Fill out your user form</h4>
      <Button id="user_form" variant="contained" color="primary">
        Here
      </Button>
      <br/>

      <h4>View therapist matches</h4>
      <Button id="therapist_matches" variant="contained" color="primary">
        Here
      </Button>
      <br/>

      <h4>View therapist communications</h4>
      <Button id="therapist_communications" variant="contained" color="primary">
        Here
      </Button>
    </div>
  );
}

export default Home;
