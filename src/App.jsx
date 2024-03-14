import { useEffect, useState } from "react";
import "./App.css";
import UseFetch from "./hooks/UseFetch";
import getRandomNumber from "./services/getRandomNumber";
import Dimension from "./components/Dimension";
import ResidentCard from "./components/ResidentCard";
import InputSearch from "./components/InputSearch";
import Hero from "./components/Hero";
import ErrorCard from "./components/ErrorCard";

function App() {
  const randomLocation = getRandomNumber(126);
  const [locationSelect, setLocationSelect] = useState(randomLocation);

  const url = `https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}`;
  const [location, getLocation, hasError] = UseFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationSelect]);

  return (
    <div className="app">
      <Hero />
      <InputSearch setLocationSelect={setLocationSelect} />
      {hasError 
        ? (
          <ErrorCard/>
          ) 
        : (
        <>
          <Dimension 
            location={location}
          />
          <div className="cards_section">
            {location?.residents.map((url) => (
              <ResidentCard 
                key={url} 
                url={url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
