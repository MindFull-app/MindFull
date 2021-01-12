import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div>
      <h1>Welcome to MindFull
      <Button variant="contained" color="primary">
        Learn More
      </Button>
      </h1>      
    </div>
  );
}

export default Header;
