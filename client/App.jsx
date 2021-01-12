import React from "react"
import ReactDOM from 'react-dom';
import {Button, TextField} from '@material-ui/core';

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
      <form className="class" noValidate autoComplete="off">
        <TextField required id="signup_username" label="Email" />
        <br/>
        <TextField required id="signup_password" label="Password" />
        <br/>
        <TextField required id="first_name" label="First Name" />
        <br/>
        <TextField required id="last_name" label="Last Name" />
      </form>
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
