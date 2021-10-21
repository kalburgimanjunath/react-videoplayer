import React from 'react';
import './style.css';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const demos = {
  soundcloud:
    '<iframe style="position: absolute;width:99%;height:100%;overflow:hidden" scrolling="yes" frameborder="no" allow="autoplay" src="https://kalburgimanjunath.github.io/danceforme/kids#/search/videos"></iframe>',
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      className="iframework"
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/account">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <Header />
            <Iframe iframe={demos['soundcloud']} allow="autoplay" />
          </Route>
          <Route path="/*" exact>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
