import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Hotel from "../components/hotel/Hotel";
import Loading from "../components/Loading";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await apiClient.get("/hotels/");
        setHotels(res.data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <section className="p-4">
      {error && <h1 className="text-red-500">{error}</h1>}

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {hotels.map((hotel) => (
            <Hotel key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hotels;
