import React from "react";
import "./AddUser.css";
const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
    </form>
  );
};

export default AddUser;
