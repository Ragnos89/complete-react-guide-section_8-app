import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
const dummyUsers = [
  {
    name: "Karol",
    age: 32,
  },
];
function App() {
  return (
    <div>
      <div>
        <AddUser></AddUser>
      </div>
      <div>
        <UserList users={dummyUsers}></UserList>
      </div>
    </div>
  );
}

export default App;
