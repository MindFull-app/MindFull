import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import Header from './components/Header.jsx';

function LogIn() {
  return (
    <div>
      <Header />
      <Button variant="contained" color="primary">
        Enter
      </Button>
    </div>
  );
}

export default LogIn;
