import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  height: "85vh",
  width: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map({ places }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDMLcbEWKS0KND1PvxZVt_AXfMtBjLFZmY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      places.map((x) => {
        bounds.extend(new window.google.maps.LatLng(x.latitude, x.longitude));
      });
      map && map.fitBounds(bounds);
      setMap(map);
    },
    [places]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      zoom={14}
      onUnmount={onUnmount}
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          position={{
            lat: parseFloat(place.latitude),
            lng: parseFloat(place.longitude),
          }}
        >
          <InfoWindow
            position={{
              lat: parseFloat(place.latitude),
              lng: parseFloat(place.longitude),
            }}
          >
            <div>
              <h3 className="text-red-700 font-bold">{place.name}</h3>
              <p className="font-bold">$ {place.price}</p>
            </div>
          </InfoWindow>
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
