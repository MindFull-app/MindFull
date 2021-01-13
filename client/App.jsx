import React from "react"
import { Route, Switch } from 'react-router-dom';
import {useState} from 'react';

import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <main>
      <Header />
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/signup' render={(props) => <SignUp {...props} setUser={setUser} />} />
      </Switch>
    </main>
  );
}

export default App;
