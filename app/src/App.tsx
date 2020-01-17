import Amplify from "aws-amplify";
import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import aws_exports from "./aws-exports";
import AuthDataProvider, { useAuthDataContext } from "./components/auth-data-context";
import Layout from "./components/layout";
import Login from "./components/login";
import Profile from './components/profile';
import SignUp from "./components/sign-up";
import Welcome from "./components/welcome";

Amplify.configure(aws_exports);

interface PrivateRoute {
  component: ReactNode, 
  path: string
}

const PrivateRoute = (props : any) => {
  const AuthData = useAuthDataContext();
  const finalComponent = Object.values(AuthData)[0] ? props.component : Login
  console.log("logged in: ", Object.values(AuthData)[0])
  
  return <Route path={props.path} component={finalComponent}/>
}

const App: React.FC = () => {
  return (
    <Router>
      <AuthDataProvider>
        <Layout>
          <Route path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/profile" component={Profile} />
        </Layout>
      </AuthDataProvider >
    </Router>
  );
};

export default App;
