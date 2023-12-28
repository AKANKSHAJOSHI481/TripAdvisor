import React, { useState } from "react";
import PlaceDetails from "./Detail";
function Places({ places }) {
  const [page, setPage] = useState(1);
  const selectClickHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= places.length / 2 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-3/4 overflow-auto">
        {places?.slice(page * 2 - 2, page * 2).map((place, i) => (
          <div key={i} className="mb-3">
            <PlaceDetails
              key={i}
              // selected={Number(childClicked) === i}
              // refProp={elRefs[i]}
              place={place}
            />
          </div>
        ))}
      </div>
      <nav aria-label="flex justify-center">
        <ul class="flex items-center justify-center space-x-px h-10 text-base">
          <li onClick={() => selectClickHandler(page - 1)}>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>

          {[...Array(places.length / 2)].map((_, i) => {
            return (
              <li
                className={
                  page === i + 1
                    ? "z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
                onClick={() => selectClickHandler(i + 1)}
              >
                {i + 1}
              </li>
            );
          })}

          <li onClick={() => selectClickHandler(page + 1)}>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Places;
