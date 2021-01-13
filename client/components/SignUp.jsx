import React from "react"
import { Link } from 'react-router-dom';
import {Button, TextField, MenuItem} from '@material-ui/core';

import SimpleCard from './views/SimpleCard.jsx'
import SimpleForm from './views/SimpleForm.jsx'

function SignUp() {
  return (
    <SimpleCard >
      <SimpleForm btn='SignUp'>
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
      </SimpleForm>
      <div>
        Already a member?
        <Link to='/'><Button>LogIn</Button></Link>
      </div>
    </SimpleCard>
  );
}

export default SignUp;
