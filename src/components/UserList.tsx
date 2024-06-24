import { useEffect, useState } from "react";
import { Users, User } from "../models/User";
import { getUsers } from "../services/fakerApi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const UserList = () => {
  const [users, setUsers] = useState<Users>([]); // state to hold the list of users

  useEffect(() => {
    // fetch data when the component mounts
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data); // set the fetched data to state
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: User, index: number) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
