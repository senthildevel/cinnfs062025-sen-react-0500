import React from "react";
import useUsers from "./hooks/useUsers";

const Profile = () => {
  const { users } = useUsers();
  return (
    <>
      <select name="" id="">
        {users.map((user) => (
          <option>{user.name}</option>
        ))}
      </select>
    </>
  );
};

export default Profile;
