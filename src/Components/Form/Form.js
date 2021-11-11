import React, { useReducer, useState } from "react";
import classes from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";

const Form = () => {
  //Add Error Handling :)
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memoriesCollection = collection(db, "memories");

  const changeCreator = (e) => setCreator(e.target.value);
  const changeTitle = (e) => setTitle(e.target.value);
  const changeMessage = (e) => setMessage(e.target.value);
  const changeImage = (e) => setImage(e.target.value);
  const changeTags = (e) => {
    const arrayOfTags = e.target.value.split(",");
    setTags(arrayOfTags);
  };

  const cancelHandler = () => {
    navigate("/");
  };

  //Submit Function
  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      title.length === 0 ||
      message.length === 0 ||
      image.length === 0 ||
      creator.length === 0 ||
      tags.length === 0
    ) {
      alert("Please fill out all fields");
      return;
    }
    if (
      !image.includes(".jpg") &&
      !image.includes(".png") &&
      !image.includes(".jpeg")
    ) {
      alert("Please enter image ending with(jpg, png or jpeg)");
      return;
    }
    const data = {
      id: Math.random().toString(),
      title: title,
      message: message,
      creator: creator,
      image: image,
      time: new Date(),
      comments: [],
      likes: 0,
      tags: tags,
    };
    dispatch(dataActions.addMemory(data));
    await addDoc(memoriesCollection, data);
    navigate("/");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1 className={classes.title}>Add Memory</h1>
      <div className={classes.inputs}>
        <TextField
          id="outlined-basic"
          label="Creator"
          variant="filled"
          onChange={changeCreator}
        />
        <TextField
          id="outlined-basic"
          label="Title"
          variant="filled"
          onChange={changeTitle}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="filled"
          onChange={changeMessage}
        />
        <TextField
          id="outlined-basic"
          label="Tags(comma separated)"
          variant="filled"
          onChange={changeTags}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="filled"
          onChange={changeImage}
        />
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.btn__cancel}
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className={classes.btn__submit} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
