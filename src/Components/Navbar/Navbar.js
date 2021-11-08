import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/time.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} className={classes.logo__img} />
        <h1>MEMORIES</h1>
      </div>
      <ul className={classes.links}>
        <NavLink to="/" className={classes.link}>
          Home
        </NavLink>
        <NavLink to="/add" className={classes.link}>
          Add Memory
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
