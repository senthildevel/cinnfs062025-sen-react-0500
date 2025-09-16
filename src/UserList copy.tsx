import React, { useEffect, useState } from "react";
import axios from "axios";

// Type
interface User {
  id: number;
  name: String;
}
export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  /*
  Request Methods:
    GET - fetch data
    POST - send data 
    PUT - Updating data - Object modify 
    PATCH - Updateing data - SIngle Property 
    DELETE - Deleteing data

    Async await

    async function(){
    
      await propmise
    }
  */

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });

    // success - then error - catch
  }, []);
  return (
    <>
      <div className="container">
        <h2>User List</h2>

        {error && <p className="text-danger">{error}</p>}
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
