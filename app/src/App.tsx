import Amplify from "aws-amplify"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import aws_exports from "./aws-exports"
import { AppContextProvider } from "./components/context/app-context"
import FormikConfirmSignUp from "./components/pages/formik/formik-confirm-sign-up"
import FormikSignIn from "./components/pages/formik/formik-sign-in"
import FormikSignUp from "./components/pages/formik/formik-sign-up"
import requireAuth from "./components/hoc/authenticate-route"
import Layout from "./components/layout/layout"
import Profile from "./components/pages/profile/profile"
import Welcome from "./components/pages/welcome"
import GoogleMaps from "./components/google-maps/google-maps"

Amplify.configure(aws_exports)

const App: React.FC = () => {
  return (
    <Router>
      <AppContextProvider>
        <Layout>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={FormikSignIn} />
          <Route path="/sign-up" exact component={FormikSignUp} />
          <Route
            path="/confirm-sign-up"
            exact
            component={FormikConfirmSignUp}
          />
          <Route path="/app/profile" exact component={requireAuth(Profile)} />
          <Route path="/app/map" exact component={requireAuth(GoogleMaps)} />
        </Layout>
      </AppContextProvider>
    </Router>
  )
}

export default App
