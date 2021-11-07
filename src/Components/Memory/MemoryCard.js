import React from "react";
import classes from "./MemoryCard.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
const MemoryCard = ({
  image,
  title,
  message,
  numOfLikes,
  tags,
  creator,
  time,
}) => {
  return (
    <div className={classes.card}>
      <div
        className={classes.image_div}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={classes.overlay}>
          <div className={classes.creator_and_edit}>
            <h1>{creator}</h1>
            <div className={classes.edit}>
              <MoreHorizIcon />
            </div>
          </div>
          <div className={classes.time}>
            <p>{time}</p>
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.tags}>
          {tags.map((each) => {
            return <p className={classes.tag}>#{each}</p>;
          })}
        </div>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.message}>
          <p>{message}</p>
        </div>
        <div className={classes.likes_and_comments}>
          <div className={classes.likes}>
            <ThumbUpAltIcon />
            <p>{numOfLikes}</p>
            <div className={classes.comment}>
              <CommentIcon />
            </div>
          </div>
          <div className={classes.delete}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;

{
  /* <div className={classes.creator_and_edit}>
        <p>{creator}</p>
        <p>...</p>
    </div>
    <div className={classes.time}>
        <p>{time}</p>
    </div> */
}

// className={classes.image_div}
// style={{
//   backgroundImage: `url(${image})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center center",
//   backgroudSize: "contain",
// }}
