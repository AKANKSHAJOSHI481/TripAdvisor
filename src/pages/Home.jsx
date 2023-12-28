// import "./App.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Places from "../components/Places";
import { placesData } from "../API/api";
function Home() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitutde } }) => {
        setCoordinates({ lat: latitude, lng: longitutde });
      }
    );
  }, []);
  useEffect(() => {
    placesData().then((data) => {
      //   console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 flex justify-center items-center">
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
            />
          </div>
          <div className="md:col-span-2">
            <Places places={places} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
