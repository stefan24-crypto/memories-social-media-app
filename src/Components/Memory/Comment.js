import React from "react";
import classes from "./Comment.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Comment = ({ content }) => {
  return (
    <div className={classes.comment}>
      <p>{content}</p>
      <div>
        <HighlightOffIcon />
      </div>
    </div>
  );
};

export default Comment;
