import React, { useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { logout, isSignedIn } from "../../utils/auth";
import { useAppContextProvider } from "../context/app-context";
import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
  Menu,
  MenuItem,
  MenuList,
  Popper,
  Paper,
  Grow,
  ClickAwayListener
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    paddingBottom: "20",
    position: "relative"
  }
});

const Navbar = () => {
  const { jwtToken, theme, lang, updateAppContext } = useAppContextProvider();
  const styles = useStyles();
  const loggedIn = isSignedIn(jwtToken);
  const content = { message: "", login: true };
  const [ openBurger, setOpenBurger] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)

  if (loggedIn) {
    content.message = `Hello`;
  } else {
    content.message = "You are not logged in";
  }

  function handleToggleBurger() {
    setOpenBurger(prev => !prev)
  }

  function handleCloseBurger(event : any ) {
    const current = burgerRef.current

    if (current && current.contains(event.target)) {
      return
    }

    setOpenBurger(false)
  }

  return (
    <AppBar className={styles.container}>
      <Toolbar>
        <Button 
          ref={burgerRef}
          onClick={(handleToggleBurger)}
        >
          <MenuIcon />
        </Button>
        <Popper open={openBurger} anchorEl={burgerRef.current} role={undefined} transition disablePortal>
            <Grow
              in={openBurger}
              timeout={150}
              style={{ transformOrigin: 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseBurger}>
                  <MenuList autoFocusItem={openBurger} id="menu-list-grow" >
                    <MenuItem onClick={handleCloseBurger}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseBurger}>My account</MenuItem>
                    <MenuItem onClick={handleCloseBurger}>Logout</MenuItem>
                  </MenuList> 
                </ClickAwayListener>
              </Paper>
            </Grow>
        </Popper>
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
