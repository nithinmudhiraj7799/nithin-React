


import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputSearch = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading,setLoading]=useState(true)

  useEffect(() => { 
    DataHandler();
  }, []);

  const DataHandler = async () => {
    try {
      const { data, status } = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (status === 200) {
        setData(data);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)

    }
  };

  const ascendingOrder = () => {
    const ascendingSortedData = [...data].sort((a, b) => a.username.localeCompare(b.username));
    setData(ascendingSortedData);
  };

  const descendingOrder = () => {
    const descendingSortedData = [...data].sort((a, b) => b.username.localeCompare(a.username));
    setData(descendingSortedData);
  };

 


  const SelectData = () => {
    const filteredData = data.filter((item) => item.username.toLowerCase().includes(searchInput.toLowerCase()));
    setData(filteredData);
  };

  return (
    <Container>
      <Row>
        <div className="mt-5">
          <h2 className="text-center mb-4">User Information</h2>
          <div style={{display: "flex", justifyContent: "center", gap: 50}}>
            <InputGroup className="mb-4">
              <Form.Control
                placeholder="Enter Username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </InputGroup>
            <Button variant="primary" onClick={ascendingOrder} className="mr-2">Sort Ascending</Button> 
            <Button variant="secondary" onClick={descendingOrder}>Sort Descending</Button>
            <Button variant="secondary" onClick={SelectData}>Filter Data</Button>
          </div>
          <br/>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Si.no</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>  
              
             <>  
            
              { 
              data.map((each) => {
                const { id, name, email, username, address: { street, city } } = each;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{street}</td>
                    <td>{city}</td>
                  </tr>
                );
              })} 
            
              </>  
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default InputSearch;
