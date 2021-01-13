import React from "react"
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </main>
  );
}

export default App;
