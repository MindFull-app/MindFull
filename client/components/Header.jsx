import React from "react"
import { makeStyles } from '@material-ui/core';
import Navbar from './views/Navbar.jsx';

const useStyles = makeStyles({
  root: {
    fontSize: '3rem',
    margin: '0',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Open Sans'
  }
});

function Header({user, setUser}) {
  const classes = useStyles();
  const name = user ? `, ${user.first_name} ${user.last_name}` : '';
  return (
    <Navbar user={user} setUser={setUser}>
      <h1 className={classes.root}>Welcome to MindFull {name}</h1>      
    </Navbar>
  );
}

export default Header;
