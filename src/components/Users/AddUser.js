import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
const AddUser = (props) => {
  return (
    <Card className={styles.input}>
      <form>
        <label className="input label" htmlFor="username">
          Username
        </label>
        <input className="input input" id="username" type="text"></input>
        <label className="input label" htmlFor="age">
          Age(years)
        </label>
        <input className="input input" id="age" type="number"></input>
      </form>
      <Button type="submit">Add User</Button>
    </Card>
  );
};

export default AddUser;
