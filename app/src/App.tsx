import Amplify from "aws-amplify";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import aws_exports from "./aws-exports";
import requireAuth from './components/hoc/authenticate-route';
import Layout from "./components/layout";
import Login from "./components/login";
import Profile from './components/profile';
import SignUp from "./components/sign-up";
import Welcome from "./components/welcome";
import JwtTokenProvider from './components/context/data-context'
Amplify.configure(aws_exports);

const App: React.FC = () => {

  console.log("re render app")
  return (
    <Router>

        <Layout>
          <Route path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/profile" component={requireAuth(Profile)} />
        </Layout>

    </Router>
  );
};

export default App;
