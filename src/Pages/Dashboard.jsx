import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchbooking = async () => {
      try {
        const allRes = await authApiClient.get("/admin/bookings/");
        setBookings(allRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchbooking();
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await authApiClient.get("/users/");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat bg-white shadow-lg rounded-lg p-6">
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value">{bookings.length}</div>
          <div className="stat-desc">
            ↗︎ {(bookings.length / 100).toFixed(2)}% from last month
          </div>
        </div>

        <div className="stat bg-white shadow-lg rounded-lg p-6">
          <div className="stat-title">Active Users</div>
          <div className="stat-value">{users.length}</div>
          <div className="stat-desc">
            ↗︎ {(users.length / 100).toFixed(2)}% from last month
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
