import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import Header from './components/Header.jsx';

function SignUp() {
  return (
    <div>
      <Header />
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
      <Button variant="contained" color="primary">
        Enter
      </Button>
    </div>
  );
}

export default SignUp;
