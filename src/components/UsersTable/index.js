import React from "react";
import { Table, Button } from "react-bootstrap";

const UsersTable = props => {
  const { users, handleSortAscending } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>avatar</th>
          <th>id</th>
          <th>
            username{" "}
            <Button onClick={handleSortAscending} variant="secondary" size="sm">
              <i className="fa fa-chevron-down"></i>
            </Button>
          </th>
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
