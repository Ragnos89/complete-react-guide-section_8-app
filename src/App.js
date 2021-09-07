import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
const dummyUsers = [
  {
    name: "Karol",
    age: 32,
    id: "u1",
  },
];
function App() {
  const [usersList, setUsersList] = useState(dummyUsers);

  const addUsereHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <div>
        <AddUser onAddUser={addUsereHandler}></AddUser>
      </div>
      <div>
        <UserList users={usersList}></UserList>
      </div>
    </div>
  );
}

export default App;
