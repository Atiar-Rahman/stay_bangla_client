import React, { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";

const ShowUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await authApiClient.get("/users/");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  const handleDelteUser = async(userId) =>{
    console.log(userId)
    try{
         await authApiClient.delete(`/users/${userId}`)

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-base-200">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Username</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">phone Number</th>
              <th className="border px-2 py-1">Staff</th>
              <th className="border px-2 py-1">Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="border px-2 py-1">{u.id}</td>
                <td className="border px-2 py-1">
                  {u.first_name} {u.last_name}
                </td>
                <td className="border px-2 py-1">{u.email}</td>
                <td className="border px-2 py-1">{u.phone_number}</td>
                <td className="border px-2 py-1">
                  {u.is_staff ? "Yes" : "No"}
                </td>
                <td className="border px-2 py-1">
                  {u.is_active ? "Yes" : "No"}
                </td>
                <td className="border px-2 py-1">
                  <button onClick={()=>handleDelteUser(u.id)} className="btn btn-outline">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowUser;
