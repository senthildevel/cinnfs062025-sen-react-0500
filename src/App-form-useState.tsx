import { useState, type FormEvent } from "react";

function App() {
  const [user, setUser] = useState({
    uname: "",
    age: "",
    option: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, option: event.target.value });
  };
  return (
    <>
      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input value={user.uname} type="text" className="form-control" onChange={(event) => setUser({ ...user, uname: event.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input value={user.age} type="text" className="form-control" onChange={(event) => setUser({ ...user, age: event.target.value })} />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Select an option:
              <select value={user.option} onChange={handleDropdownChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </label>
            <p>Selected option: {user.option}</p>
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
