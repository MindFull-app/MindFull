import React from "react";
import {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import {Button, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SimpleCard from './views/SimpleCard.jsx';
import SimpleForm from './views/SimpleForm.jsx';

const useStyles = makeStyles({
  radioForm: {
    marginTop: '1rem'
  },
  radioDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

function SignUp({user, setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [radio, setRadio] = useState('patient');

  const classes = useStyles();

  function handleInputChange(event) {
    const target = event.target;
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'firstName') setFirstName(target.value);
    if(target.name === 'lastName') setLastName(target.value);
  }

  function handleRadioChange(event) {
    setRadio(event.target.value);
  }
  
  const onFormSubmit = () => {
    let body = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }
    if(radio === 'patient') {
      body = {...body, ...{patient: true}}
    } else {
      body = {...body, ...{therapist: true}}
    }
    fetch('/user/signup', {
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
    setFirstName('')
    setLastName('')
  }

  return (
    <SimpleCard >
      <SimpleForm btn='SignUp' onFormSubmit={onFormSubmit}>
        {user ? <Redirect to="/form" /> : ''}
        <TextField onChange={(e) => handleInputChange(e)} value={firstName} required id="first_name" name="firstName" label="First Name" />
        <TextField onChange={(e) => handleInputChange(e)} value={lastName} required id="last_name" name="lastName" label="Last Name" />
        <TextField onChange={(e) => handleInputChange(e)} value={email} required id="signup_username" name="email" label="Email" />
        <TextField onChange={(e) => handleInputChange(e)} value={password} required id="signup_password" name="password" label="Password" type="password"/>

        <FormControl className={classes.radioForm} component="fieldset">
          <FormLabel component="legend">Select User Type</FormLabel>
          <RadioGroup className={classes.radioDiv} aria-label="selectUserType" name="selectUserType" value={radio} onChange={handleRadioChange}>
            <FormControlLabel value="patient" control={<Radio />} label="patient" />
            <FormControlLabel value="therapist" control={<Radio />} label="therapist" />
          </RadioGroup>
        </FormControl>

      </SimpleForm>
      <div>
        Already a member?
        <Link to='/'><Button>LogIn</Button></Link>
      </div>
    </SimpleCard>
  );
}

export default SignUp;
