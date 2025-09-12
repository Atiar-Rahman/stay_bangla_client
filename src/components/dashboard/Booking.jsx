import React from "react";
import useAuthContext from "../../hook/useAuthContext";
import authApiClient from "../../services/auth-api-client";

const Booking = ({ b, endpoint, handleCancel }) => {
  const { user } = useAuthContext();

  
const getHotelId = async (hotelName) => {
  const res = await authApiClient.get("/hotels/");
  console.log("Hotels from API:", res.data); // check actual fields
  const hotel = res.data.find(
    (h) => h.name?.toLowerCase().trim() === hotelName.toLowerCase().trim()
  );
  if (!hotel) throw new Error("Hotel not found");
  return hotel.id;
};


const getRoomId = async (hotelId, roomName) => {
  const res = await authApiClient.get(`/hotels/${hotelId}/rooms/`);
  const room = res.data.find(r => r.room_type === roomName);
  if (!room) throw new Error("Room not found");
  return room.id;
};

 const handleDelete = async (bookingId, b) => {
   if (
     !window.confirm(
       "Do you want to delete this booking before deleting the hotel?"
     )
   )
     return;

   try {
     // 1️ Get hotel ID
     let hotelId;
     try {
       hotelId = await getHotelId(b.hotel_name);
     } catch (err) {
       alert("Hotel not found for this booking.",err);
       return;
     }
     console.log(hotelId)

     // 2️ Get room ID
     let roomId;
     try {
       roomId = await getRoomId(hotelId, b.room_name);
     } catch (err) {
       alert("Room not found for this booking.",err);
       return;
     }
     console.log(roomId)
    //  console.log(bookingId,roomId,hotelId)
    //  3️ Delete booking
     await authApiClient.delete(
       `/hotels/${hotelId}/rooms/${roomId}/bookings/${bookingId}/`
     );
     console.log(`Booking ${bookingId} deleted successfully`);
     alert("Booking deleted successfully!");
   } catch (err) {
     console.error(err.response?.data || err);
     alert(err.response?.data?.detail || "Failed to delete booking.");
   }
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
        <button
          onClick={() => handlePayment(b.id)}
          className="mt-2 cursor-pointer bg-green-300 text-white py-1 px-3 rounded hover:bg-green-700 transition-colors mr-2"
        >
          Payment Now
        </button>
      )}

      {/* Admin or staff can update/delete */}
      {(user.is_staff || user.is_supervisor) && (
        <>
          <button
            // onClick={() => handleUpdate(b.id)}
            className="mt-2 bg-blue-300 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors mr-2"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(b.id,b)}
            className="mt-2 cursor-pointer bg-gray-300 text-white py-1 px-3 rounded hover:bg-gray-700 transition-colors"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Booking;
