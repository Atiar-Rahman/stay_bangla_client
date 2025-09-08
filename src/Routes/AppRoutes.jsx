import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../Pages/Contact";
import BlogDetails from "../components/home/BlogDetails";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import AddHotel from "../Pages/AddHotel";
import AddRoom from "../Pages/AddRoom";
import AddRoomImage from "../Pages/AddHotelImage";
import Hotels from "../Pages/Hotels";
import HotelDetails from "../Pages/HotelDetails";
import RoomBooking from "../Pages/RoomBooking";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="addhotel" element={<AddHotel />} />
        <Route path="addroom" element={<AddRoom />} />
        <Route path="addimages" element={<AddRoomImage />} />
        <Route path="showhotel" element={<Hotels />} />
        <Route path="hotel/:hotelId" element={<HotelDetails />} />
        <Route path="hotel/:hotelId/rooms/:roomId/bookings/" element={<RoomBooking/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
