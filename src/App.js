import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, message} from "antd";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import loadable from "@loadable/component";

const Loading = () => <div>...</div>;

const Home = loadable(() => import("./Home"), {
  fallback: <Loading/>
});

const About = loadable(() => import("./About"), {
  fallback: <Loading/>
});

const Topics = loadable(() => import("./Topics"), {
  fallback: <Loading/>
});

function App() {
  useEffect(() => {
    console.log(Object.entries)
    console.log(Object.values({a: 1}))
    message.success('my love');
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Learn React</Button>
        </a>
      </header>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
