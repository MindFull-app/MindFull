import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import Header from './components/Header.jsx';

function LogIn() {
  return (
    <div>
      <Header />
      <br/>
      <form className="class" noValidate autoComplete="off">
        <TextField required id="username" label="Username" />
        <br/>
        <TextField required id="password" label="Password" />
      </form>
      <br/>
      <Button variant="contained" color="primary">
        Enter
      </Button>
    </div>
  );
}

export default LogIn;
