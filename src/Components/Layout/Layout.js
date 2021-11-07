import React, { Fragment } from "react";
import NavBar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <section className={classes.app}>
      <NavBar />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
