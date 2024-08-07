

import "./countryFinder.css"

import { useEffect, useState } from "react";
import axios from "axios";
import CustomSpinner from "../../components/Customspinner/CustomSpinner";
// import "./mycountryApi.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CountryFinder=()=>{
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
    const filtered = countries.filter(country=>country.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredCountries(filtered);
  };

  return (
    <div className="TotalBody"> 
    <div className="Heading"> <h2>Country List</h2></div>
     
      <InputGroup className="Main" >
        <Form.Control 
          placeholder="Search for a country"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </InputGroup >
      <select style={{width:"562px"}} onChange={selectCountryHandler} value={selectedCountry}>
        {filteredCountries.map((country, inedx) => (
          <option key={inedx} value={country} style={{width:"562px"}}>
            {country}
          </option>
        ))}
      </select>
      <br />
      {loading && <CustomSpinner/>}
        {Object.keys(selectedCountryData).length > 0 && !loading && (
        <div className="countryCard">
          <h2 className="countryName">{selectedCountryData.name.common}</h2>
          <img className="flagImage"  src={selectedCountryData.flags.png}  />

            <h3 className="capital"> Capital: <span>{selectedCountryData.capital}</span>  </h3>
           
            <h3 className="population"> Population: <span>{selectedCountryData.population}</span>   </h3>
             <h3 className="region"> Region: <span>{selectedCountryData.region}</span>   </h3>
            <h3 className="location"> Location:{" "}  <a href={selectedCountryData.maps.googleMaps}>Google Maps</a>
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

export default CountryFinder;

