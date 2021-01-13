import React from "react"
import { Link } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';

import SimpleCard from './views/SimpleCard.jsx';
import SimpleForm from './views/SimpleForm.jsx';

function LogIn() {
  return (
    <SimpleCard >
      <SimpleForm btn='LogIn'>
        <TextField required id="username" label="Username" />
        <TextField required id="password" label="Password" type="password"/>
      </SimpleForm>
      <div>
        Not a member?
        <Link to='signup'><Button>SignUp</Button></Link>
      </div>
    </SimpleCard>
  );
}

export default LogIn;
