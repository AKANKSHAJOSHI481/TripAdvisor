import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Places from "./components/Places";
import Details from "./components/Detail";
function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-between flex-wrap">
        <div>
          <Map />
        </div>
        <div>
          <Places />
        </div>
      </div>
    </div>
  );
}

export default App;
