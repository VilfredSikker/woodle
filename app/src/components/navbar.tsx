import React from "react";
import { Link } from "react-router-dom";
import { logout, isSignedIn } from '../utils/auth';
import { useAppContextProvider } from "./context/app-context";

const Navbar = () => {
  const { jwtToken , theme, lang, updateAppContext } = useAppContextProvider()
  console.log("jwtToken: ", jwtToken, isSignedIn(jwtToken))
  const loggedIn = isSignedIn(jwtToken)
  console.log("Navbar check logged in: ", loggedIn)
  const content = { message: "", login: true };
  
  if (loggedIn) {
    content.message = `Hello`;
  } else {
    content.message = "You are not logged in";
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0"
      }}
    >
      <span>{content.message}</span>
      <nav>
        <Link to="/">Welcome Page</Link>
        {` `}
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/profile">Profile</Link>
        {` `}
        {loggedIn ? (
          <button
            onClick={e => {
              updateAppContext({jwtToken: "", theme, lang})
              logout()
            }}
          >
            <Link to="login" >Logout</Link>
          </button>
        ) : (
          <Link to="/">Sign In</Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
