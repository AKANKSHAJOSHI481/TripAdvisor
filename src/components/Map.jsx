import React from "react";
import GoogleMapReact from "google-map-react";
function Map() {
  const coordinates = { lat: 0, lng: 0 };
  const mapStyles = {
    height: "85vh", // Set an appropriate height for your map
    width: "100%",
  };
  return (
    <div style = {mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDMLcbEWKS0KND1PvxZVt_AXfMtBjLFZmY' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
