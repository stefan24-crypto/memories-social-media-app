import React from "react";
import classes from "./Tag.module.css";

const Tag = ({ content }) => {
  return <p className={classes.tag}>#{content}</p>;
};

export default Tag;
