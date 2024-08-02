// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./mycountryApi.css";
// import CustomSpinner from "../components/Customspinner/CustomSpinner";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// function CountriesApi() {
//   const [country, setCountry] = useState([]);
//   const [selectCountry, setSelectCountry] = useState("");
//   const [selectedCountryData, setSelectedCountryData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     const response = await axios.get("https://restcountries.com/v3.1/all");
//     const result = nameExtractor(response.data);
//     setCountry(result);
//     setLoading(false);
//   };

//   function nameExtractor(data) {
//     return data.map((each) => each.name.official);
//   }

//   function selectCountryHandler(event) {
//     event.preventDefault();
//     setSelectCountry(event.target.value);
//     fetchSelectedCountry(event.target.value);
//   }

//   const fetchSelectedCountry = async (countryName) => {
//     setLoading(true);
//     const response1 = await axios.get(
//       `https://restcountries.com/v3.1/name/${countryName}`
//     );
//     setSelectedCountryData(response1.data[0]);
//     setLoading(false);
//   };


//   const CountryHandler=()=>{
//     const filteredData = country.filter((item) => item.country.toLowerCase().includes(searchInput.toLowerCase()));
//     setCountry(filteredData);
//   }
//   return (
//     <div className="Total-Body"> 
//       <h2>Country Listing</h2>
   
//       <InputGroup className="mb-4">
//               <Form.Control
//                 placeholder="Enter Username"
//                 aria-label="Recipient's username"
//                 aria-describedby="basic-addon2"
//                 onChange={(e) => setSearchInput(e.target.value)}
//               />
//             </InputGroup>
//       <button onClick={CountryHandler}>Search</button>
//       <select onChange={selectCountryHandler} value={selectCountry}>
//         {country.map((eachCountry, i) => (
//           <option value={eachCountry} key={i}>
//             {eachCountry}
//           </option>
//         ))}
//       </select>
//       <br />
//       {loading && <CustomSpinner/>}
//       {Object.keys(selectedCountryData).length > 0 && !loading && (
//         <div className="country-card">
//           <h2 className="country-name">{selectedCountryData.name.common}</h2>
//           <img
//             src={selectedCountryData.flags.png}
//             alt={selectedCountryData.flags.alt}
//             className="flag-image"
//           />
//           <h3 className="capital">
//             Capital: <span>{selectedCountryData.capital}</span>
//           </h3>
//           <h3 className="population">
//             Population: <span>{selectedCountryData.population}</span>
//           </h3>
//           <h3 className="region">
//             Region: <span>{selectedCountryData.region}</span>
//           </h3>
//           {/* <h3 className="continent">
//             Continent: <span>{selectedCountryData.continents}</span>
//           </h3> */}
//           <h3 className="location">
//             Location:{" "}
//             <a href={selectedCountryData.maps.googleMaps}>Google Maps</a>
//           </h3>
//           <img
//             src={selectedCountryData.coatOfArms.png}
//             height={200}
//             width={200}
//             className="coat-of-arms"
//             alt={selectedCountryData.flags.alt}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CountriesApi;

import { useEffect, useState } from "react";
import axios from "axios";
import "./mycountryApi.css";
import CustomSpinner from "../components/Customspinner/CustomSpinner";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CountriesApi() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const result = response.data.map(country => country.name.official);
    setCountries(result);
    setFilteredCountries(result);
    setLoading(false);
  };

  const selectCountryHandler = async (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    fetchSelectedCountry(countryName);
  };

  const fetchSelectedCountry = async (countryName) => {
    setLoading(true);
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    setSelectedCountryData(response.data[0]);
    setLoading(false);
  };

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);
    const filtered = countries.filter(country => country.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredCountries(filtered);
  };

  return (
    <div className="Total-Body"> 
      <h2>Country List</h2>
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Search for a country"
          aria-label="Search for a country"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </InputGroup>
      <select onChange={selectCountryHandler} value={selectedCountry}>
        {filteredCountries.map((country, inedx) => (
          <option value={country} key={inedx}>
            {country}
          </option>
        ))}
      </select>
      <br />
      {loading && <CustomSpinner />}
      {Object.keys(selectedCountryData).length > 0 && !loading && (
        <div className="country-card">
          <h2 className="country-name">{selectedCountryData.name.common}</h2>
          <img
            src={selectedCountryData.flags.png}
           
            className="flag-image"
          />
            <h3 className="capital">
            Capital: <span>{selectedCountryData.capital}</span>
            </h3>
            <h3 className="population">
            Population: <span>{selectedCountryData.population}</span>
            </h3>
            <h3 className="region">
            Region: <span>{selectedCountryData.region}</span>
            </h3>
            <h3 className="location">
            Location:{" "}
            <a href={selectedCountryData.maps.googleMaps}>Google Maps</a>
            </h3>
          {/* <img
            src={selectedCountryData.coatOfArms.png}
            height={200}
            width={100}
            className="coat-of-arms"
            alt={selectedCountryData.flags.alt}
          /> */}
        </div>
      )}
    </div>
  );
}

export default CountriesApi;

