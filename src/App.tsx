import { Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import Sidebar from "./pages/Sidebar";
import UserRoutes from "./routes/UserRoutes";
import "./nav.css";

// react-router-dom

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/our-services" style={({ isActive }) => ({ color: isActive ? "green" : "black" })}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" reloadDocument={true}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users/15">
              User Detail
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users/all">
              User All
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Home />
      <About />
      <Services />
      <Contact /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<Sidebar />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/our-services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>

        <Route path="/users/*" element={<UserRoutes />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
