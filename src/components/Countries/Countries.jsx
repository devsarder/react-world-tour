import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    // console.log("visited this countries");
    console.log(country);
    const newCountry = [...visitedCountries, country];
    setVisitedCountries(newCountry);
  };
  // console.log(visitedCountries);
  return (
    <div>
      {/* visited countries */}
      <div>
        <h5>visited countries:{visitedCountries.length}</h5>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <h4>countries{countries.length}</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "10px",
        }}
      >
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
