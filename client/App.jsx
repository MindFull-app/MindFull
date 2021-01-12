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
      <form className="class" noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
