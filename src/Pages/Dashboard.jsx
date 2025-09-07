
const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat bg-white shadow-lg rounded-lg p-6">
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value">120</div>
          <div className="stat-desc">↗︎ 12% from last month</div>
        </div>
        <div className="stat bg-white shadow-lg rounded-lg p-6">
          <div className="stat-title">Active Users</div>
          <div className="stat-value">85</div>
          <div className="stat-desc">↗︎ 8% from last week</div>
        </div>
        <div className="stat bg-white shadow-lg rounded-lg p-6">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">৳50k</div>
          <div className="stat-desc">↘︎ 4% from last week</div>
        </div>
        <div className="stat bg-white shadow-lg rounded-lg p-6">
          <div className="stat-title">Available Rooms</div>
          <div className="stat-value">42</div>
          <div className="stat-desc">Updated just now</div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
