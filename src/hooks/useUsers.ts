import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import type { User } from "../services/user-service";
import userService from "../services/user-service";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    //const controller = new AbortController(); //instancce

    setLoading(true);

    const { cancel, request } = userService.getAll<User>();

    request
      .then((response) => {
        console.log(response);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      })
      .finally(() => {
        //setLoading(false);
      });

    // success - then error - catch

    // on Unmount - cancel the get request
    return () => cancel();
  }, []);

  return { users, error, loading, message, setUsers, setError, setLoading, setMessage };
};

export default useUsers;
