import React from "react";
import { Table } from "react-bootstrap";

const UsersTable = props => {
  const { users } = props;
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>avatar</th>
          <th>id</th>
          <th>username</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.avatar_url}</td>
            <td>{user.id}</td>
            <td>{user.login}</td>
            <td>{user.html_url}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
