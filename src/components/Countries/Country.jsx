import { useState } from "react";

/* eslint-disable react/prop-types */
const Country = ({ country, handleVisitedCountries }) => {
  // eslint-disable-next-line react/prop-types
  const { name, capital, flags } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div
      style={{
        border: "2px solid tomato",
        marginBottom: "15px",
        borderRadius: "15px",
      }}
      // eslint-disable-next-line react/jsx-no-comment-textnodes
    >
      <h3>Name: {name.common}</h3>
      <h4>Capital: {capital}</h4>
      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>

      <button onClick={()=>handleVisitedCountries(country)}>Mark as visited</button>
    </div>
  );
};

export default Country;
