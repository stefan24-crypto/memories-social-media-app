import React, { Fragment, useState, useRef } from "react";
import classes from "./ModalForm.module.css";
import Overlay from "./Overlay";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";

const ModalForm = ({
  creator,
  image,
  message,
  tags,
  title,
  stopShowModal,
  id,
}) => {
  const memories = useSelector((state) => state.data.memories);
  const thisMemory = memories.find((each) => each.id === id);
  const creatorRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const imageRef = useRef();
  const tagsRef = useRef();

  //SubmitHandler
  const submitUpdatedDataHandler = async (e) => {
    e.preventDefault();
    const tags = tagsRef.current.value.split(",");
    if (
      titleRef.current.value.length === 0 ||
      messageRef.current.value.length === 0 ||
      imageRef.current.value.length === 0 ||
      creatorRef.current.value.length === 0 ||
      tagsRef.current.value.length === 0
    ) {
      alert("Please fill out all fields");
      return;
    }
    if (
      !imageRef.current.value.includes(".jpg") &&
      !imageRef.current.value.includes(".png") &&
      !imageRef.current.value.includes(".jpeg")
    ) {
      alert("Please enter image ending with(jpg, png or jpeg)");
      return;
    }
    const data = {
      id: Math.random().toString(),
      title: titleRef.current.value,
      message: messageRef.current.value,
      creator: creatorRef.current.value,
      image: imageRef.current.value,
      time: new Date(),
      comments: thisMemory.comments,
      likes: thisMemory.likes,
      tags: tags,
    };
    const userDoc = doc(db, "memories", id);
    const newFileds = data;
    await updateDoc(userDoc, newFileds);
    stopShowModal();
  };

  const closeModalHandler = () => {
    stopShowModal();
  };
  return (
    <Fragment>
      <Overlay onClick={stopShowModal}></Overlay>
      <form className={classes.form} onSubmit={submitUpdatedDataHandler}>
        <div className={classes.editing}>
          <h1>Editing "{title}"</h1>
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label="Creator"
            variant="filled"
            defaultValue={creator}
            inputRef={creatorRef}
          />
          <TextField
            id="outlined-basic"
            label="Title"
            variant="filled"
            defaultValue={title}
            inputRef={titleRef}
          />
          <TextField
            id="outlined-basic"
            label="Message"
            variant="filled"
            defaultValue={message}
            inputRef={messageRef}
          />
          <TextField
            id="outlined-basic"
            label="Tags(comma separated)"
            variant="filled"
            defaultValue={tags.join()}
            inputRef={tagsRef}
          />
          <TextField
            id="outlined-basic"
            label="Image"
            variant="filled"
            defaultValue={image}
            inputRef={imageRef}
          />
        </div>
        <div className={classes.btns}>
          <button
            type="button"
            className={classes["button-30"]}
            id={classes.btn1}
            onClick={closeModalHandler}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={classes["button-30"]}
            id={classes.btn2}
          >
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ModalForm;
