import React from "react";
import logo from "./logo.svg";
import Layout from "./components/layout";
import "./App.css";
import Welcome from "./components/welcome";
import Login from "./components/login";
import SignUp from "./components/sign-up";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </Layout>
    </Router>
  );
};

export default App;
