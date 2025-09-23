import { Routes, Route } from "react-router-dom";
import UserAll from "../products/UserAll";
import UserDetail from "../products/UserDetail";
import UserMenu from "../products/UserMenu";
import Users from "../products/Users";
import PageNotFound from "../pages/PageNotFound";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<UserMenu />}>
        <Route index element={<Users />}></Route>
        <Route path=":id" element={<UserDetail />}></Route>
        <Route path="all" element={<UserAll />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
