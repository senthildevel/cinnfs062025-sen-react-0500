import { useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  //const uf = useForm();
  //console.log(uf);
  /*  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  */

  console.log(errors);

  return (
    <>
      <div className="container" onSubmit={handleSubmit((data) => console.log(data))}>
        <h1>Form</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input {...register("uname", { required: true, minLength: 3 })} type="text" className="form-control" />
            {errors.uname?.type == "required" && <p className="text-danger">Please enter username</p>}
            {errors.uname?.type == "minLength" && <p className="text-danger">Please enter atleast 3 characters</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input {...register("age")} type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input {...register("email")} type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
