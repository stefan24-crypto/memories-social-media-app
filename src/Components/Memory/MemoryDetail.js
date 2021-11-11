import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MemoryDetail.module.css";
import Tag from "./Tag";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import moment from "moment";
import Comment from "./Comment";
import { TextField } from "@mui/material";
import { dataActions } from "../../store/data-slice";
import { db } from "../../firebase";
import { doc, updateDoc } from "@firebase/firestore";

const MemoryDetail = ({ id }) => {
  //Variables Needed
  const [comment, setComment] = useState("");
  const memories = useSelector((state) => state.data.memories);
  const thisMemory = memories.find((each) => each.id === id);
  const dispatch = useDispatch();
  if (!thisMemory) return <h1>No Memory</h1>;

  //Functions
  const commentChange = (e) => setComment(e.target.value);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "memories", id);
    const newFields = {
      comments: [
        { id: Math.random().toString(), text: comment },
        ...thisMemory.comments,
      ],
    };
    await updateDoc(userDoc, newFields);
    setComment("");
  };
  const addLikeHandler = async () => {
    const userDoc = doc(db, "memories", id);
    const newFileds = { likes: thisMemory.likes + 1 };
    await updateDoc(userDoc, newFileds);
  };

  return (
    <section className={classes.page}>
      <header className={classes.header}>
        <img src={thisMemory?.image} />
      </header>
      <div className={classes.content}>
        <main className={classes.main}>
          <div className={classes.tags}>
            {thisMemory.tags.map((each) => (
              <Tag content={each} key={Math.random().toString()} />
            ))}
            <div className={classes.likes} onClick={addLikeHandler}>
              <ThumbUpAltIcon />
              <p>{thisMemory.likes}</p>
            </div>
          </div>
          <div className={classes.title}>
            <h1>{thisMemory.title}</h1>
          </div>
          <div className={classes.creator}>
            <h2>
              by {thisMemory.creator}, {moment(thisMemory.time).fromNow()}
            </h2>
          </div>
          <div className={classes.description}>
            <p>{thisMemory.message}</p>
          </div>
        </main>
        <footer className={classes.comment__section}>
          {/* <div className={classes.addComment__heading}>
            <h1>Comments</h1>
          </div> */}
          <form className={classes.comment__input} onSubmit={addCommentHandler}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Comment"
              variant="filled"
              onChange={commentChange}
              value={comment}
            />
          </form>
          <div className={classes.comments}>
            {thisMemory.comments.map((each) => (
              <Comment content={each.text} id={each.id} key={each.id} />
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MemoryDetail;
