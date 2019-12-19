import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import api from "./utils/api.js";
import UsersTable from "./components/UsersTable";
import { Container } from "react-bootstrap";

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
    <Container>
      <UsersTable users={users} />
    </Container>
  );
};

export default App;
