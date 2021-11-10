import React from "react";
import classes from "./MemoryCard.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";
import moment from "moment";
import { useNavigate } from "react-router";
import Tag from "./Tag";

const MemoryCard = ({
  image,
  title,
  message,
  numOfLikes,
  tags,
  creator,
  time,
  id,
  numOfComments,
}) => {
  //Functions
  const shorten = (str) => {
    return `${str.slice(0, 140)}...`;
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likeHandler = () => {
    dispatch(dataActions.addLike(id));
  };
  const deleteHandler = () => {
    dispatch(dataActions.deleteMemory(id));
  };
  const goToDetailPage = () => {
    navigate(`/${id}`);
  };

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
            <p>{moment(time).fromNow()}</p>
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.tags}>
          {tags.map((each) => {
            return <Tag content={each} key={Math.random().toString()} />;
          })}
        </div>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.message}>
          <p>{message.length > 150 ? shorten(message) : message}</p>
        </div>
        <div className={classes.likes_and_comments_and_delete}>
          <div className={classes.likes_and_comments}>
            <div className={classes.likes} onClick={likeHandler}>
              <ThumbUpAltIcon />
              <p>{numOfLikes}</p>
            </div>
            <div className={classes.comment} onClick={goToDetailPage}>
              <CommentIcon />
              <p>{numOfComments}</p>
            </div>
          </div>
          <div className={classes.delete} onClick={deleteHandler}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
