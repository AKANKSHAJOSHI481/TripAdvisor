import React from 'react'
import { Link } from 'react-router-dom';
function Detail({place}) {
  return (
    <div>
    <Link to={`/place/${place.id}`}>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
    <div className="px-4 py-2">
      <h1 className="text-gray-900 font-bold text-3xl uppercase">{place.name}</h1>
      
      <div className = "h-[70px]">
      <p className="text-gray-600 text-sm mt-1">{place.description}</p>
      </div>
    </div>
    <img className="h-56 w-full object-cover mt-2" src={place.imageURL} alt="NIKE AIR"/>
    <div className="flex items-center justify-between px-4 py-2 ">
      <h1 className="text-black-200 font-bold text-xl">${place.price}</h1>
    </div>
  </div>
  </Link>
    </div>
  )
}

export default Detail
