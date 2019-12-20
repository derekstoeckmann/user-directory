import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import api from "./utils/api.js";
import UsersTable from "./components/UsersTable";
import FilterInput from "./components/FilterInput";
import { Container } from "react-bootstrap";

const App = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await api.users();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSortAscending = () => {
    const sortedUsers = [...users].sort((a, b) => (a.login > b.login ? 1 : -1));

    setUsers(sortedUsers);
  };

  return (
    <Container>
      <FilterInput inputValue={inputValue} setInputValue={setInputValue} />
      <UsersTable
        handleSortAscending={handleSortAscending}
        users={users.filter(({ login }) => login.includes(inputValue))}
      />
    </Container>
  );
};

export default App;
