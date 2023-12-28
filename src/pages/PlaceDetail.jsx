import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { placesData } from "../API/api";
function PlaceDetail() {
  const { id } = useParams();
  const [places, setPlaces] = useState([]);
  // Fetch hotel details based on the `hotelId` (you need to implement this)
  // const hotelDetails = fetchHotelDetails(hotelId);
  
  useEffect(() => {
    placesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  console.log(places)
  const PlaceDetails = places.find((place) => place.id === id);
  console.log(PlaceDetails)
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap">
        {/* Hotel Image */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <img
            src={PlaceDetails.imageURL}
            alt={PlaceDetails.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Hotel Details */}
        <div className="w-full md:w-1/2 lg:w-2/3 mb-4 px-4">
          <h2 className="text-3xl font-semibold mb-2">{PlaceDetails.name}</h2>
          <p className="text-gray-600 mb-4">{PlaceDetails.description}</p>

          {/* Features */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc pl-4">
              <li className="mb-2">Nice Ambiance</li>
              <li className="mb-2">Swimming Pool</li>
              <li className="mb-2">Great Food</li>
            </ul>
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p>${PlaceDetails.price}</p>
          </div>

          {/* Reserve Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;
