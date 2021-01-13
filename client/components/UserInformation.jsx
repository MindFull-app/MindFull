import React from "react"
import ReactDOM from 'react-dom';
import {Button, TextField, MenuItem} from '@material-ui/core';
import {FormLabel, FormGroup, FormControl, FormControlLabel, Checkbox} from '@material-ui/core';

import SimpleCard from './views/SimpleCard.jsx'
import SimpleForm from './views/SimpleForm.jsx'

function UserInformation() {
  const [state, setState] = React.useState({
    impostor_syndrome: false,
    lgbtqia_issues: false,
    marriage_counseling: false,
    childhood_trauma: false,
    substance_abuse: false,
    mental_health: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { impostor_syndrome,
    lgbtqia_issues,
    marriage_counseling,
    childhood_trauma,
    substance_abuse,
    mental_health } = state;

  return (
    <SimpleCard >
      <SimpleForm btn='Enter'>
        <TextField required id="user_age" label="Age" />
        <br/>
        <TextField required id="years_experience" label="Years of Therapy Experience" />
        <br/>
        <TextField required id="gender_identity" label="Gender Identity">
          <MenuItem>Male</MenuItem>
          <MenuItem>Female</MenuItem>
          <MenuItem>Non-binary</MenuItem>
          <MenuItem>Transgender MTF</MenuItem>
          <MenuItem>Transgender FTM</MenuItem>
          <MenuItem>Other</MenuItem>
        </TextField>
        <br/>
        <TextField required id="sexual_orientation" label="Sexual Orientation">
          <MenuItem>Heterosexual/Straight</MenuItem>
          <MenuItem>Homosexual/Gay/Lesbian</MenuItem>
          <MenuItem>Bisexual/Pansexual</MenuItem>
          <MenuItem>Asexual</MenuItem>
          <MenuItem>Demisexual</MenuItem>
          <MenuItem>Other</MenuItem>
        </TextField>
        <br/>
        <TextField required id="relationship_status" label="Relationship Status">
          <MenuItem>Single</MenuItem>
          <MenuItem>In a relationship</MenuItem>
          <MenuItem>Domestic Partnership/Married</MenuItem>
          <MenuItem>Divorced</MenuItem>
          <MenuItem>Widowed</MenuItem>
          <MenuItem>Other</MenuItem>
        </TextField>
        <br/>
        <TextField required id="gender_identity" label="Therapist Gender Preference">
          <MenuItem>Male</MenuItem>
          <MenuItem>Female</MenuItem>
          <MenuItem>Does not matter</MenuItem>
        </TextField>
        <br/>
        <TextField required id="pronouns" label="Pronouns" />
      </SimpleForm>
      <FormControl component="fieldset">
        <FormLabel component="legend">Please check off all fields you would like your therapist to have experience counseling for:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={impostor_syndrome} onChange={handleChange} name="impostor_syndrome" />
              }
              label="Impostor Syndrome"
            />
            <FormControlLabel
              control={
                <Checkbox checked={lgbtqia_issues} onChange={handleChange} name="lgbtqia_issues" />
              }
              label="LGBTQIA Issues"
            />
            <FormControlLabel
              control={
                <Checkbox checked={marriage_counseling} onChange={handleChange} name="marriage_counseling"/>
              }
              label="Marriage Counseling"
            />
            <FormControlLabel
              control={
                <Checkbox checked={childhood_trauma} onChange={handleChange} name="childhood_trauma"/>
              }
              label="Childhood Trauma"
            />
            <FormControlLabel
              control={
                <Checkbox checked={substance_abuse} onChange={handleChange} name="substance_abuse"/>
              }
              label="Substance Abuse"
            />
            <FormControlLabel
              control={
                <Checkbox checked={mental_health} onChange={handleChange} name="mental_health"/>
              }
              label="Mental Health"
            />
          </FormGroup>
      </FormControl>
    </SimpleCard >
  );
}

export default UserInformation;
