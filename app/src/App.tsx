import Amplify from "aws-amplify";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import aws_exports from "./aws-exports";
import requireAuth from "./components/hoc/authenticate-route";
import Layout from "./components/layout";
import Login from "./components/login";
import Profile from "./components/profile";
import SignUp from "./components/sign-up";
import Welcome from "./components/welcome";
import { AppContextProvider } from "./components/context/app-context";

Amplify.configure(aws_exports);

const App: React.FC = () => {
  return (
    <Router>
      <AppContextProvider>
        <Layout>
          <Route path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/profile" component={requireAuth(Profile)} />
        </Layout>
      </AppContextProvider>
    </Router>
  );
};

export default App;
