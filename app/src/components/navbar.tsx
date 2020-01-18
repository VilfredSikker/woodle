import React from "react";
import { Link } from "react-router-dom";
import { useAuthDataContext } from "./context/auth-data-context";
import { logout } from '../utils/auth'

const Navbar = () => {
  const AuthData = useAuthDataContext();
  const loggedIn = Object.values(AuthData)[0]
  const username = Object.values(AuthData)[0]
  const content = { message: "", login: true };
  
  if (loggedIn) {
    console.log("Auth Data: ", username);
    content.message = `Hello ${username}`;
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
