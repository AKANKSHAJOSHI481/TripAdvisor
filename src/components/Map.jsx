import React, {useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
function Map({ setCoordinates, setBounds, coordinates, places }) {
  // const coordinates = {lat : 0, lng : 0};
  const mapStyles = {
    height: "85vh", // Set an appropriate height for your map
    width: "100%",
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the threshold as needed
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDMLcbEWKS0KND1PvxZVt_AXfMtBjLFZmY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        
      </GoogleMapReact>
    </div>
  );
}

export default Map;
