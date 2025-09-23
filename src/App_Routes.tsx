import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import Sidebar from "./pages/Sidebar";
import UserRoutes from "./routes/UserRoutes";

// react-router-dom

const App = () => {
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
