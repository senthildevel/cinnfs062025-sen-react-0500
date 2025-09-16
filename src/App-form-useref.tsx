import { useRef, type FormEvent } from "react";

function App() {
  const unameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  if (unameRef.current) unameRef.current.focus();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = { uname: "", age: 0 };

    // unameRef.current.value;
    if (unameRef.current != null) {
      console.log("Uname", unameRef.current.value);
      data.uname = unameRef.current.value;
    }

    if (ageRef.current != null) {
      console.log("Age", ageRef.current.value);
      data.age = parseInt(ageRef.current.value);
    }

    console.log(data);

    /*{
      uname: "JOhn",
      aeg: 24
    }
      */
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
            <input ref={unameRef} type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input ref={ageRef} type="text" className="form-control" />
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
