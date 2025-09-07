import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../Pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
