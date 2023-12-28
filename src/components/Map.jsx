// import React, {useState, useEffect} from "react";
// import GoogleMapReact from "google-map-react";
// function Map({ setCoordinates, setBounds, coordinates, places }) {
//   // const coordinates = {lat : 0, lng : 0};
//   const mapStyles = {
//     height: "85vh", // Set an appropriate height for your map
//     width: "100%",
//   };
//   places = [
//     { latitude: 40.7128, longitude: -74.0060, price: 100 },
//     { latitude: 34.0522, longitude: -118.2437, price: 150 },
//     { latitude: 0, longitude: 0, price: 120 },
    
//     // Add more places as needed
// ];
//   const [isMobile, setIsMobile] = useState(false);
//   console.log(places);
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 600); // Adjust the threshold as needed
//     };

//     // Initial check
//     checkScreenSize();

//     // Listen for resize events
//     window.addEventListener('resize', checkScreenSize);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);
//   // console.log(Number(places[0].longitude))
//   return (
//     <div style={mapStyles}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDMLcbEWKS0KND1PvxZVt_AXfMtBjLFZmY" }}
//         defaultCenter={coordinates}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         onChange={(e) => {
//           console.log(e);
//           setCoordinates({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//       >
//         {places?.map((place, i) => (
          
//           <div lat={Number(place.latitude)} lng={Number(place.longitude)} key = {i}>
//             {
              
//                 <div className="text-red-900 text-5xl">
//                   $ {place.price}
//                 </div>
              
//             }
//           </div>
//         ))}
//       </GoogleMapReact>
//     </div>
//   );
// }
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: "85vh", // Set an appropriate height for your map
    width: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map({setCoordinates, setBounds, coordinates, places }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDMLcbEWKS0KND1PvxZVt_AXfMtBjLFZmY"
  })

  const [map, setMap] = React.useState(null)
  
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    places?.forEach(({ latitude, longitude }) => bounds.extend({ lat: latitude, lng : longitude}));
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        {places.map(({ latitude, longitude }) => (
          <Marker position={{ lat : latitude, lng : longitude}} />
        ))}
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
