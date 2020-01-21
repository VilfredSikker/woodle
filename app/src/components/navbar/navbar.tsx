import React from "react";
import { Link, Redirect } from "react-router-dom";
import { logout, isSignedIn } from "../../utils/auth";
import { useAppContextProvider } from "../context/app-context";
import { AppBar, IconButton, Toolbar, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles({
  container:  {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white'
  }
})

const Navbar = () => {
  const { jwtToken, theme, lang, updateAppContext } = useAppContextProvider();
  const styles = useStyles()
  const loggedIn = isSignedIn(jwtToken);
  const content = { message: "", login: true };

  if (loggedIn) {
    content.message = `Hello`;
  } else {
    content.message = "You are not logged in";
  }

  return (
    <AppBar className={styles.container}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       flex: "1",
  //       justifyContent: "space-between",
  //       borderBottom: "1px solid #d1c1e0"
  //     }}
  //   >
  //     <span>{content.message}</span>
  //     <nav>
  //       <Link to="/">Welcome Page</Link>
  //       {` `}
  //       <Link to="/login">Login</Link>
  //       <Link to="/sign-up">Sign Up</Link>
  //       <Link to="/app/profile">Profile</Link>
  //       {` `}
  //       {loggedIn ? (
  //         <button
  //           onClick={e => {
  //             updateAppContext({jwtToken: "", theme, lang})
  //             logout()
  //           }}
  //         >
  //           <Link to="/" >Logout</Link>
  //         </button>
  //       ) : (
  //         <Link to="/login">Sign In</Link>
  //       )}
  //     </nav>
  //   </div>
  // );
};

export default Navbar;
