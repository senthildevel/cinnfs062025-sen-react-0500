import { Routes, Route, Link, useRoutes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import Sidebar from "./pages/Sidebar";
import UserRoutes from "./routes/UserRoutes";
import { UserList } from "./UserList";
import UserDetail from "./products/UserDetail";
import UserAll from "./products/UserAll";
import Users from "./products/Users";

// react-router-dom

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/users",
      children: [
        {
          index: true,
          element: <Users />,
        },
        {
          path: ":id",
          element: <UserDetail />,
        },
        {
          path: "all",
          element: <UserAll />,
        },
      ],
    },
  ]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/our-services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/15">User Detail</Link>
          </li>
          <li>
            <Link to="/users/all">User All</Link>
          </li>
        </ul>
      </nav>
      {/* <Home />
      <About />
      <Services />
      <Contact /> */}

      {element}
    </>
  );
};

export default App;
