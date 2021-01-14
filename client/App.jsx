import React from "react"
import { Route, Switch } from 'react-router-dom';
import {useState} from 'react';

import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import UserInformation from './components/UserInformation.jsx';
import Home from './components/Home.jsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: img => ({
    backgroundImage: `url('./build/img/${img}.jpg')`,
    backgroundSize: 'cover',
    transitionDuration: '1s',
    height: '100%'
  })
});

function App() {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState(1);
  const classes = useStyles(img);
  function rotateBackground() {
    let index = img % 17 + 1;
    setTimeout(() => {
      setImg(index)}, 5000)
  }

  rotateBackground();

  return (
    <main className={classes.root}>
      <Header user={user}/>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/signup' render={(props) => <SignUp {...props} setUser={setUser} user={user}/>} />
        <Route path='/home' component={Home} />
        <Route path='/form' component={UserInformation} />
      </Switch>
    </main>
  );
}

export default App;
