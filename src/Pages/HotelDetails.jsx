import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import Loading from "../components/Loading";
import Room from "../components/hotel/Room";
import SectionTitle from "../components/SectionTitle";
import HotelInfo from "../components/hotel/HotelInfo";

const HotelDetails = () => {
  const { hotelId } = useParams(); // ✅ extract id from route params
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rooms,setRooms] = useState([])

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await apiClient.get(`/hotels/${hotelId}/`);
        setHotel(res.data);
        setRooms(res.data.rooms)
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to fetch hotel details");
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [hotelId]);

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Hotel not found.</p>
      </div>
    );
  }

  return (
    <div >
      <div>
        <HotelInfo hotel={hotel}/>
      </div>
      <section>
        <SectionTitle heading={'Show Avaliable Hotel Room Booking Now'}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {rooms.map((room) => (
            <Room key={room.id} room={room}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotelDetails;
