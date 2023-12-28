import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { placesData } from "../API/api";
import { Link } from "react-router-dom";

function PlaceDetail() {
  const { id } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    placesData()
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const PlaceDetails = places.find((place) => place.id === id);

  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:items-center px-20 py-10">
      <div className="flex flex-col gap-6 lg:w-2/5">
        <img
          src={PlaceDetails.imageURL}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <h1 className="text-3xl font-bold">{PlaceDetails.name}</h1>
        </div>
        <p className="text-gray-700">{PlaceDetails.description}</p>
        <h6 className="text-2xl font-semibold">${PlaceDetails.price}</h6>
        <div className="flex flex-row items-center gap-12">
          <Link to="/">
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;
