import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Places from "./components/Places";
import Details from "./components/Detail";
function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 flex justify-center items-center">
            <Map />
          </div>
          <div className="md:col-span-2">
            <Places />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
