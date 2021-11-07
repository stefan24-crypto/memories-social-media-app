import React from "react";
import classes from "./Form.module.css";
import TextField from "@mui/material/TextField";

const Form = () => {
  return (
    <form className={classes.form}>
      <h1 className={classes.title}>Add Memory</h1>
      <div className={classes.inputs}>
        <TextField id="outlined-basic" label="Creator" variant="filled" />
        <TextField id="outlined-basic" label="Title" variant="filled" />
        <TextField id="outlined-basic" label="Message" variant="filled" />
        <TextField id="outlined-basic" label="Tags" variant="filled" />
      </div>
      <div className={classes.buttons}>
        <button className={classes.btn__cancel} type="button">
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
