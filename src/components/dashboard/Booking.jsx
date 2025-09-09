import React from "react";
import useAuthContext from "../../hook/useAuthContext";
import authApiClient from "../../services/auth-api-client";

const Booking = ({ b, endpoint, handleCancel }) => {
  const { user } = useAuthContext();

  const handleDelete = async (bookingId) => {
    if (!window.confirm("Are you sure you want to delete this booking?"))
      return;
    try {
      await authApiClient.delete(`/bookings/${bookingId}/`);
      alert("Booking deleted successfully!");
      window.location.reload(); // or you can refetch data from parent
    } catch (err) {
      console.error(err);
      alert("Failed to delete booking.");
    }
  };

  const handleUpdate = async (bookingId) => {
    // You can navigate to a booking update form page
    alert(`Update booking ${bookingId} (implement the update logic here)`);
  };

  const handlePayment = async (booking) => {
    try {
      const payload = {
        booking_id: booking.id,
        amount: booking.amount, // important
        num_rooms: booking.num_rooms, // important
      };
      const res = await authApiClient.post("payment/initiate/", payload);
      console.log(res.data.payment_url);
      window.location.href = res.data.payment_url; // redirect user
    } catch (err) {
      console.log(
        "Payment initiation error:",
        err.response?.data || err.message
      );
    }
  };


  return (
    <div className="border p-4 mb-4 rounded shadow-sm bg-white">
      <p>
        <strong>User Email:</strong> {b.user_email}
      </p>
      <p>
        <strong>Hotel Name:</strong> {b.hotel_name}
      </p>
      <p>
        <strong>Room Name:</strong> {b.room_name}
      </p>
      <p>
        <strong>Room Type:</strong> {b.room_type}
      </p>
      <p>
        <strong>Check-in:</strong> {new Date(b.check_in).toLocaleDateString()}
      </p>
      <p>
        <strong>Check-out:</strong> {new Date(b.check_out).toLocaleDateString()}
      </p>
      <p>
        <strong>Guests:</strong> {b.num_guests} | <strong>Rooms:</strong>{" "}
        {b.num_rooms}
      </p>
      <p>
        <strong>Amount:</strong> {b.amount.toLocaleString()} ৳
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span
          className={
            b.status === "cancelled"
              ? "text-red-600"
              : b.status === "pending"
              ? "text-yellow-600"
              : "text-green-600"
          }
        >
          {b.status}
        </span>
      </p>
      <p>
        <strong>Booking Reference:</strong> {b.booking_reference}
      </p>
      <p>
        <strong>Cancellation Allowed:</strong>{" "}
        {b.cancellation_allowed ? "Yes" : "No"}
      </p>
      <p>
        <strong>Created At:</strong> {new Date(b.created_at).toLocaleString()}
      </p>

      {/* User can cancel only if booking is NOT confirmed */}
      {b.status !== "confirmed" &&
        b.status !== "cancelled" &&
        endpoint === "/bookings/" &&
        b.cancellation_allowed && (
          <button
            onClick={() => handleCancel(b.id)}
            className="mt-2 bg-red-300 text-white py-1 px-3 rounded hover:bg-red-700 transition-colors mr-2"
          >
            Cancel Booking
          </button>
        )}
      {b.status === "pending" && (
        <button onClick={()=>handlePayment(b)}
          className="mt-2 bg-green-300 text-white py-1 px-3 rounded hover:bg-green-700 transition-colors mr-2"
        >
          Payment Now
        </button>
      )}

      {/* Admin or staff can update/delete */}
      {(user.is_staff || user.is_supervisor) && (
        <>
          <button
            onClick={() => handleUpdate(b.id)}
            className="mt-2 bg-blue-300 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors mr-2"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(b.id)}
            className="mt-2 bg-gray-300 text-white py-1 px-3 rounded hover:bg-gray-700 transition-colors"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Booking;
