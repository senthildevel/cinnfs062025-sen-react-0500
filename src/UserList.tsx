import React, { useEffect, useState } from "react";
//import axios, { CanceledError } from "axios";
import apiClient, { CanceledError } from "./services/api-client";
import UserService from "./services/user-service";
import type { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

export const UserList = () => {
  const { users, error, loading, message, setUsers, setError, setLoading, setMessage } = useUsers();

  const deleteUser = (deleteuser: User) => {
    // Take a copy of origianl user array
    const originalUser = [...users];

    //Update tot he state variable
    setUsers(users.filter((user) => user.id != deleteuser.id));

    // update to the server :
    //https://jsonplaceholder.typicode.com/users/5
    UserService.delete(deleteuser.id).catch((error) => {
      // Restore the originbal suer array back
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = [...users];

    const newUser = { id: 0, name: "Courseinn Academy" };
    setUsers([newUser, ...users]);

    UserService.add(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((error) => {
        // Restore the originbal suer array back
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];

    //var user = {id:2, name: "Ervin Hopwell"}

    const updatedUser = { ...user, name: user.name + " !!!!" };

    setUsers(users.map((u) => (user.id == u.id ? updatedUser : u)));

    // to send the udpate request

    UserService.update(user)
      .then(() => {
        setMessage("Successfully Updated");
      })
      .catch((e) => {
        setError(e.message);
        setUsers(originalUser);
      });
  };

  return (
    <>
      <div className="container">
        <h2>User List</h2>

        {loading && <div className="spinner-border"></div>}

        {message && <p className="text-success">{message}</p>}
        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-primary mb-4" onClick={addUser}>
          Add User
        </button>
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item d-flex justify-content-between" key={user.id}>
              {user.id} - {user.name}
              <div>
                <button className="btn btn-outline-secondary me-2" onClick={() => updateUser(user)}>
                  Update
                </button>
                <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
