import React from "react"
import ReactDOM from 'react-dom';
import {Button, TextField, MenuItem} from '@material-ui/core';

import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <Button variant="contained" color="primary">
        Log in
      </Button>
      <br/>
      <br/>

      <div>
        <form className="class" noValidate autoComplete="off">
          <TextField required id="user_age" label="Enter your Age" />
          <required id="user_age" label="Enter your Age" />
          <p>What is your </p>
          {/* first_name, last_name, email, password, patient, therapist, */}
        </form>
      </div>

      {/* age: Number,
  orientation: String,
  relationship_status: String,
  years_experience: Number,
  gender: String,
  therapist_preference: String,
  imposter_syndrome: Boolean,
  lgbtqia_issues: Boolean,
  marriage_counseling: Boolean,
  childhood_trauma: Boolean,
  substance_abuse: Boolean,
  mental_health: Boolean, */}

      <br/>
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
      <br/>
      <Button variant="contained" color="primary">
        Sign up as a therapist
      </Button>
    </div>
  );
}

export default App;
