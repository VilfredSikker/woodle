import {
  AppBar,
  Button,
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { isSignedIn, logout } from "../../utils/auth"
import { useAppContextProvider } from "../context/app-context"

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    position: "relative"
  },
  content: {
    display: "flex",
    justifyContent: "space-between"
  }
})

const Navbar = () => {
  const { jwtToken, theme, lang, updateAppContext } = useAppContextProvider()
  const styles = useStyles()
  const loggedIn = isSignedIn(jwtToken)
  const [openBurger, setOpenBurger] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)

  function handleToggleBurger() {
    setOpenBurger(prev => !prev)
  }

  function handleCloseBurger(event: any) {
    const current = burgerRef.current

    if (current && current.contains(event.target)) {
      return
    }

    setOpenBurger(false)
  }

  const contentLoggedIn = (
    <Toolbar className={styles.content}>
      <Button ref={burgerRef} onClick={handleToggleBurger}>
        <MenuIcon />
      </Button>
      <Popper
        open={openBurger}
        anchorEl={burgerRef.current}
        role={undefined}
        transition
        disablePortal
      >
        <Grow
          in={openBurger}
          timeout={150}
          style={{ transformOrigin: "center bottom" }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseBurger}>
              <MenuList autoFocusItem={openBurger} id="menu-list-grow">
                <MenuItem onClick={handleCloseBurger}>Profile</MenuItem>
                <MenuItem onClick={handleCloseBurger}>My account</MenuItem>
                <MenuItem onClick={handleCloseBurger}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      </Popper>
      <Button
        onClick={e => {
          updateAppContext({ jwtToken: "", theme, lang })
          logout()
        }}
      >
        <Link to="/">Logout</Link>
      </Button>
    </Toolbar>
  )

  const contentSignedOut = (
    <Toolbar className={styles.content}>
      <span>Welcome to woodle</span>
      <Button ref={burgerRef} onClick={handleToggleBurger}>
        <Link to="/login">Login</Link>
      </Button>
      <Button ref={burgerRef} onClick={handleToggleBurger}>
        <Link to="/sign-up">Sign Up</Link>{" "}
      </Button>
    </Toolbar>
  )

  return (
    <AppBar className={styles.container}>
      {loggedIn ? contentLoggedIn : contentSignedOut}
    </AppBar>
  )
}

export default Navbar
