import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../Pages/Contact";
import BlogDetails from "../components/home/BlogDetails";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import AddRoom from "../Pages/AddRoom";
import AddRoomImage from "../Pages/AddHotelImage";
import Hotels from "../Pages/Hotels";
import HotelDetails from "../Pages/HotelDetails";
import RoomBooking from "../Pages/RoomBooking";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import ShowBooking from "../Pages/ShowBooking";
import ShowUser from "../Pages/ShowUser";
import ShowReview from "../Pages/ShowReview";
import PrivateRoute from "./PrivateRoute";
import HotelForm from "../Pages/HotelForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="hotel/add" element={<HotelForm mode="add" />} />
        <Route path="addroom/:hotelId" element={<AddRoom />} />
        <Route
          path="hotel/update/:id"
          element={<HotelForm mode="update" />}
        />
        <Route path="addimages" element={<AddRoomImage />} />
        <Route path="showhotel" element={<Hotels />} />
        <Route path="hotel/:hotelId" element={<HotelDetails />} />
        <Route
          path="hotel/:hotelId/rooms/:roomId/bookings/"
          element={<RoomBooking />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="showbooking" element={<ShowBooking />} />
        <Route path="users" element={<ShowUser />} />
        <Route path="reviews" element={<ShowReview />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
