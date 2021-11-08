import React from "react";
import { useSelector } from "react-redux";
import classes from "./MemoryDetail.module.css";
import Tag from "./Tag";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import moment from "moment";
import Comment from "./Comment";
import { TextField } from "@mui/material";

const MemoryDetail = ({ id }) => {
  const memories = useSelector((state) => state.data.memories);
  const thisMemory = memories.find((each) => each.id === id);
  if (!thisMemory) return <h1>No Memory</h1>;
  return (
    <section className={classes.page}>
      <header
        className={classes.header}
        style={{ backgroundImage: `url(${thisMemory?.image})` }}
      ></header>
      <main className={classes.main}>
        <div className={classes.tags}>
          {thisMemory.tags.map((each) => (
            <Tag content={each} />
          ))}
          <div className={classes.likes}>
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
        <div>
          <h1>Add Comment</h1>
        </div>
        <form className={classes.comment__input}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Comment"
            variant="filled"
          />
        </form>
        <div className={classes.comments}>
          {thisMemory.comments.map((each) => (
            <Comment content={each.text} id={each.id} />
          ))}
        </div>
      </footer>
    </section>
  );
};

export default MemoryDetail;
