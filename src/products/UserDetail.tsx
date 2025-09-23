import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

// need user id
const UserDetail = () => {
  const { id } = useParams(); // URL Parameter

  const navigate = useNavigate();
  console.log(id);

  // /users /users/2 /users/2/edit

  const admin = false;

  const btnClick = () => {
    navigate("/contact?q=news&price=5000&status=true", { state: { userName: "Courseinn Academy" } });
  };

  return (
    <>
      {/* {admin && <Navigate to="/contact" />} */}
      <Link to="/">Home</Link>
      <Link to="../">Back</Link>
      <Link to="edit" replace={true}>
        Edit
      </Link>
      <h1>UserDetail - {id}</h1>

      <button onClick={btnClick}>Click Here</button>
    </>
  );
};

export default UserDetail;
