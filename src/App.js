import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./utils/api.js";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await api.users();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <h1 key={user.id}>{user.login}</h1>
      ))}
    </div>
  );
};

export default App;
