import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { placesData } from "../API/api";
import { Link } from "react-router-dom";

function PlaceDetail() {
  const { id } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState({
    img1:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2:
      "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3:
      "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4:
      "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

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
        <p className="text-gray-700">
          {PlaceDetails.description}
        </p>
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
