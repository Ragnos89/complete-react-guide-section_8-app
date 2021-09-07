import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={changeUsernameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
