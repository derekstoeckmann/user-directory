import React from "react";
import { Table, Button, Figure } from "react-bootstrap";

const UsersTable = props => {
  const { users, handleSortAscending, handleSortDescending } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>avatar</th>
          <th>
            username{"  "}
            <Button onClick={handleSortAscending} variant="secondary" size="sm">
              <i className="fa fa-chevron-down"></i>
            </Button>{" "}
            <Button
              onClick={handleSortDescending}
              variant="secondary"
              size="sm"
            >
              <i className="fa fa-chevron-up"></i>
            </Button>
          </th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>
              <Figure.Image
                width={80}
                height={80}
                alt={user.login}
                src={user.avatar_url}
              />
            </td>
            <td>{user.login}</td>
            <td>
              <a href={user.html_url}>GitHub</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
