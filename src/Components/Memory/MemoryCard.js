import React, { Fragment, useState } from "react";
import classes from "./MemoryCard.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/data-slice";
import moment from "moment";
import { useNavigate } from "react-router";
import Tag from "./Tag";
import { doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";
import ModalForm from "../Form/ModalForm";

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
  const [showModal, setShowModal] = useState(false);
  //Functions
  const shorten = (str) => {
    return `${str.slice(0, 140)}...`;
  };

  const memories = useSelector((state) => state.data.memories);
  const thisMemory = memories.find((each) => each.id === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const likeHandler = async () => {
    const userDoc = doc(db, "memories", id);
    const newFileds = { likes: thisMemory.likes + 1 };
    await updateDoc(userDoc, newFileds);
  };

  const deleteHandler = async () => {
    const memoryDoc = doc(db, "memories", id);
    await deleteDoc(memoryDoc);
  };
  const goToDetailPage = () => {
    navigate(`/${id}`);
  };

  const editMemoryHandler = () => {
    setShowModal(true);
  };

  const stopEditingMemory = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
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
              <div className={classes.edit} onClick={editMemoryHandler}>
                <MoreHorizIcon />
              </div>
            </div>
            <div className={classes.time}>
              <p>{moment(time.toDate()).fromNow()}</p>
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
      {showModal && (
        <ModalForm
          creator={creator}
          title={title}
          image={image}
          message={message}
          tags={tags}
          stopShowModal={stopEditingMemory}
          id={id}
        />
      )}
    </Fragment>
  );
};

export default MemoryCard;
