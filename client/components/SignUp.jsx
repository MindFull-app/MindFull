import React from "react"
import ReactDOM from 'react-dom';
import {Button, TextField, MenuItem} from '@material-ui/core';

import Header from './components/Header.jsx';

function SignUp() {
  return (
    <div>
      <Header />
      <br/>
      {/* first_name, last_name, email, password, patient, therapist, */}
      <form className="class" noValidate autoComplete="off">
        <TextField required id="signup_username" label="Email" />
        <br/>
        <TextField required id="signup_password" label="Password" />
        <br/>
        <TextField required id="first_name" label="First Name" />
        <br/>
        <TextField required id="last_name" label="Last Name" />
        <br/>
        <TextField required id="therapist_patient" select label="User Type">
          <MenuItem>Therapist</MenuItem>
          <MenuItem>Patient</MenuItem>
        </TextField>
      </form>
      <Button variant="contained" color="primary">
        Enter
      </Button>
    </div>
  );
}

export default SignUp;
