
import { Form, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./weatherapp.css";

const api = {
  key: "6a6adf96f7dc4efd5229441f145ec3f0",
  base: "https://api.openweathermap.org/data/2.5/"
};

function Searching() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const SearchHandler = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setSearch("");
      })
      .catch((error) => {
        console.error("Error fetching the weather data: ", error);
      });
  };

  return (
    <Container className="main">
      <Row className="mb-4">
        <Col>
          <InputGroup>
            <Form.Control
              placeholder="Enter your city"
              aria-label="Enter your city"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button variant="primary" onClick={SearchHandler}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <div className="content">
        <h1>Weather App</h1>
        {weather.name && (
          <>
            <h2>{weather.name}</h2>
            {weather.main && <h3>{weather.main.temp}°C</h3>}
          </>
        )}
      </div>
    </Container>
  );
}

export default Searching;
