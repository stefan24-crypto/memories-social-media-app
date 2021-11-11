import React from "react";
import classes from "./Comment.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";

const Comment = ({ content, id, curMemory }) => {
  const deleteCommentHandler = async () => {
    const userDoc = doc(db, "memories", curMemory.id);
    const updatedComments = curMemory.comments.filter((each) => each.id !== id);
    const newFields = { comments: [...updatedComments] };
    await updateDoc(userDoc, newFields);
  };
  return (
    <div className={classes.comment}>
      <p>{content}</p>
      <div className={classes.del} onClick={deleteCommentHandler}>
        <HighlightOffIcon />
      </div>
    </div>
  );
};

export default Comment;
