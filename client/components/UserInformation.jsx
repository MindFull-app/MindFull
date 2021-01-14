import React from "react"
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import {Button, Menu, TextField, MenuItem} from '@material-ui/core';
import {makeStyles, FormLabel, FormGroup, FormControl, FormControlLabel, Checkbox} from '@material-ui/core';

import SimpleCard from './views/SimpleCard.jsx'
import SimpleForm from './views/SimpleForm.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  title: {
    margin: 0,
    fontFamily:'Open Sans'
  },
  formgroup: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row'
  }
}));

let submitted = false;

const therapyBeforeOpt = ['Yes', 'No'];
const genderIdentities = ['Male', 'Female', 'Transgender MTF', 'Transgender FTM', 'Non-binary', 'Gender Fluid', 'Other', 'I don\'t know'];
const sexualOrientations = ['Heterosexual/Straight', 'Homosexual/Gay/Lesbian', 'Bisexual/Pansexual', 'Asexual', 'Demisexual', 'Other'];
const relationshipStatuses = ['Single', 'In a relationship', 'Domestic Partnership/Married', 'Divorced', 'Widowed', 'Other'];
const therapistPreferences = ['Male', 'Female', 'Other', 'Does not matter'];
const pronouns = ['He/Him/His', 'She/Her/Hers', 'They/Them/Theirs', 'Other'];

function UserInformation({user, setUser}) {
  const classes = useStyles();
  const [userAge, setUserAge] = React.useState();
  const [counseling, setCounseling] = React.useState({
    impostor_syndrome: false,
    lgbtqia_issues: false,
    marriage_counseling: false,
    childhood_trauma: false,
    substance_abuse: false,
    mental_health: false
  });
  const [therapyBefore, setTherapyBefore] = React.useState();
  const [therapyYears, setTherapyYears] = React.useState();
  const [genderIdentity, setGenderIdentity] = React.useState();
  const [sexualOrentation, setSexualOrientation] = React.useState();
  const [relationshipStatus, setRelationshipStatus] = React.useState();
  const [therapistPreference, setTherapistPreference] = React.useState();
  const [pronoun, setPronoun] = React.useState();

  const handleChange = (event) => {
    if(event.target.name === 'userAge') setUserAge(event.target.value);
    if(event.target.name === 'therapyExperience') setTherapyBefore(event.target.value);
    if(event.target.name === 'therapyYears') setTherapyYears(event.target.value);
    if(event.target.name === 'genderIdentity') setGenderIdentity(event.target.value);
    if(event.target.name === 'sexualOrientation') setSexualOrientation(event.target.value);
    if(event.target.name === 'relationshipStatus') setRelationshipStatus(event.target.value);
    if(event.target.name === 'therapistPreference') setTherapistPreference(event.target.value);
    if(event.target.name === 'pronoun') setPronoun(event.target.value);
    setCounseling({ ...counseling, [event.target.name]: event.target.checked });
  };

  const { impostor_syndrome,
    lgbtqia_issues,
    marriage_counseling,
    childhood_trauma,
    substance_abuse,
    mental_health } = counseling;
  
  const onFormSubmit = () => {
    let body = {
      _id: user._id,
      age: userAge,
      orientation: sexualOrentation,
      relationship_status: relationshipStatus,
      years_experience: therapyYears,
      gender: genderIdentity,
      pronouns: pronoun,
      therapy_before: therapyBefore,
      gender_preference: therapistPreference,
      imposter_syndrome: counseling.impostor_syndrome,
      lgbtqia_issues: counseling.lgbtqia_issues,
      marriage_counseling: counseling.marriage_counseling,
      childhood_trauma: counseling.childhood_trauma,
      substance_abuse: counseling.substance_abuse,
      mental_health: counseling.mental_health
    }
    
    fetch('/user/form', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      setUser({...user, ...data})
      console.log('data coming in', data);
      submitted = true;
    })
    .catch(err => console.log(err))
  }

  return (
    <SimpleCard >
      <h2 className={classes.title}>User Information</h2>
      <SimpleForm btn='Enter' onFormSubmit={onFormSubmit}>
      {submitted ? <Redirect to="/home" /> : submitted === false}
        <TextField onChange={(e) => handleChange(e)} value={userAge} required id="user_age" name="userAge" label="Age" />
        <TextField required id="therapy_experience" select label="Have you ever been in therapy before?" value={therapyBefore} onChange={handleChange} name="therapyExperience">
          {therapyBeforeOpt.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField onChange={(e) => handleChange(e)} value={therapyYears} required id="years_experience" name="therapyYears" label="Years of Therapy Experience" />
        <TextField required id="gender_identity" select value={genderIdentity} onChange={handleChange} label="Gender Identity" name="genderIdentity">
          {genderIdentities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField required id="sexual_orientation" select value={sexualOrentation} onChange={handleChange}label="Sexual Orientation" name="sexualOrientation">
          {sexualOrientations.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField required id="relationship_status" select value={relationshipStatus} onChange={handleChange} label="Relationship Status" name="relationshipStatus">
          {relationshipStatuses.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField required id="therapist_preference" select value={therapistPreference} onChange={handleChange} label="Therapist Gender Preference" name="therapistPreference">
          {therapistPreferences.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField required id="pronouns" select value={pronoun} onChange={handleChange} label="Pronouns" name="pronouns">
          {pronouns.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <FormControl component="fieldset">
        <FormLabel component="legend">Please check off all fields you would like your therapist to have experience counseling for:</FormLabel>
          <br/>
          <FormGroup className={classes.formgroup}>
            <div>
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
            </div>
            <div>
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
            </div>     
          </FormGroup>
      </FormControl>
      </SimpleForm>
    </SimpleCard >
  );
}

export default UserInformation;
