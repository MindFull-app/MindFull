import React from "react"
import {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';

import SimpleCard from './views/SimpleCard.jsx';
import SimpleForm from './views/SimpleForm.jsx';

function LogIn({user, setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onChange (event) {
    if(event.target.name === "email") setEmail(event.target.value);
    if(event.target.name === "password") setPassword(event.target.value);
  }

  function onFormSubmit () {
    const body = {
      email,
      password
    }
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.log(err))
    setEmail('')
    setPassword('')
  }

  return (
    <SimpleCard >
      {user ? <Redirect to="/form" /> : ''}
      <SimpleForm btn='LogIn' onFormSubmit={onFormSubmit}>
        <TextField required name="email" onChange={(e) => onChange(e)} value={email} id="email" label="Email" />
        <TextField required name="password" onChange={(e) => onChange(e)} value={password} id="password" label="Password" type="password"/>
      </SimpleForm>
      <div>
        Not a member?
        <Link to='signup'><Button>SignUp</Button></Link>
      </div>
    </SimpleCard>
  );
}

export default LogIn;
