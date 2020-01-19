import React from "react";
import { Link, Redirect } from "react-router-dom";
import { logout, isSignedIn } from '../utils/auth';
import { useAppContextProvider } from "./context/app-context";

const Navbar = () => {
  const { jwtToken , theme, lang, updateAppContext } = useAppContextProvider()

  const loggedIn = isSignedIn(jwtToken)
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
        <Link to="/app/profile">Profile</Link>
        {` `}
        {loggedIn ? (
          <button
            onClick={e => {
              updateAppContext({jwtToken: "", theme, lang})
              logout()
            }}
          >
            <Link to="/" >Logout</Link>
          </button>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
