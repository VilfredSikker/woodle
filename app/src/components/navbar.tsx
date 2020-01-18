import React from "react";
import { Link } from "react-router-dom";
import { isNullOrUndefined } from "util";
import { logout } from '../utils/auth';
import { useJwtTokenContext } from "./context/data-context";

const Navbar = () => {
  const jwtToken = useJwtTokenContext()

  console.log("jwt Token: ",jwtToken)
  const loggedIn = isNullOrUndefined(jwtToken)
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
