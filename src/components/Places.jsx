import React, { useState } from "react";
import PlaceDetails from "./Detail";
function Places({ places }) {
  const [page, setPage] = useState(1);
  const selectClickHandler = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= places.length/2 && selectedPage !== page) {
      setPage(selectedPage);
    }
   
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-3/4 overflow-auto">
        {places?.slice(page * 2 - 2, page * 2).map((place, i) => (
          <div key={i} className="mb-3">
            <PlaceDetails
              // selected={Number(childClicked) === i}
              // refProp={elRefs[i]}
              place={place}
            />
          </div>
        ))}
      </div>
      {places.length > 0 && (
        <div className="p-10 m-5 flex justify-center gap-3">
          <span className="border-2 border-black cursor-pointer" onClick={() => selectClickHandler(page-1)}>◀️</span>
          {[...Array(places.length / 2)].map((_, i) => {
            return (
              <span
                className = {page === i+1 ? "border-2 border-black  cursor-pointer bg-gray-200" : "border-2 border-black  cursor-pointer"}
                onClick={() => selectClickHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span className="border-2 border-black cursor-pointer" onClick={() => selectClickHandler(page+1)}>▶️</span>
        </div>
      )}
    </div>
  );
}

export default Places;
