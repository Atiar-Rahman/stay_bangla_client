import React, { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import useAuthContext from "../hook/useAuthContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Booking from "../components/dashboard/Booking";


const ShowBooking = () => {
  const { user } = useAuthContext();
  const [myBookings, setMyBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    setLoading(true);
    try {
      // Fetch user's own bookings
      const myRes = await authApiClient.get("/bookings/");
      setMyBookings(myRes.data);

      // Fetch all bookings only if user is staff/admin
      if (user.is_staff || user.is_supervisor) {
        const allRes = await authApiClient.get("/admin/bookings/");
        setAllBookings(allRes.data);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchBookings();
  }, [user]);

  const handleCancel = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?"))
      return;
    try {
      await authApiClient.post(`/bookings/${bookingId}/cancel/`);
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Failed to cancel booking.");
    }
  };

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <Tabs>
      <TabList>
        <Tab>My Bookings</Tab>
        {user.is_staff || user.is_supervisor ? <Tab>All Bookings</Tab> : null}
      </TabList>

      <TabPanel>
        {myBookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          myBookings.map((b) => (
            <Booking
              key={b.id}
              b={b}
              endpoint="/bookings/"
              handleCancel={handleCancel}
            />
          ))
        )}
      </TabPanel>

      {user.is_staff || user.is_supervisor ? (
        <TabPanel>
          {allBookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            allBookings.map((b) => (
              <Booking
                key={b.id}
                b={b}
                endpoint="/admin/bookings/"
                handleCancel={handleCancel}
              />
            ))
          )}
        </TabPanel>
      ) : null}
    </Tabs>
  );
};

export default ShowBooking;
