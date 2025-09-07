import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../Pages/Contact";
import BlogDetails from "../components/home/BlogDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
