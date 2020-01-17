import React from "react"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const Navbar = () => {
    const content = { message: "", login: true }
    if (true) {
        content.message = `Hello `
    } else {
        content.message = "You are not logged in"
    }
    return (
        <div
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
                borderBottom: "1px solid #d1c1e0",
            }}
        >
            <span>{content.message}</span>
            <nav>
                <Link to="/">Welcome Page</Link>
                {` `}
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>
                {` `}
                {true ? (
                    <a
                        href="/"
                        onClick={e => {
                            e.preventDefault()
                        }}
                    >
                        Logout
            </a>
                ) : <Link to="/">Sign In</Link>}
            </nav>
        </div>
    )
}

export default Navbar