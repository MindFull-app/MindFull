import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import Header from './Header.jsx';

function LogIn() {
  return (
    <div>
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
