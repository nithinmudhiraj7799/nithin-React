

import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Fetch = () => {
  const [data, setData] = useState([]);
  // const [loading,setLoading]=useState(true)

  useEffect(() => {
    DataHandler();
  }, []);

  const DataHandler = async () => {
    try {
      const {data,status} = await axios.get("https://jsonplaceholder.typicode.com/users");
      // const data1 = response.data;

      console.log(data);
      if(status===200){

      
      setData(data);
      // loading(false)
      }


    } catch (error) {
      console.log(error);
      // loading(false)
    }
  };

  const ascendingOrder=()=> {
    const ascendingSortedData = [...data].sort((a, b)=>a.username.localeCompare(b.username));
        setData(ascendingSortedData);
  };

  const descendingOrder = () => {
    const descendingSortedData = [...data].sort((a,b)=>b.username.localeCompare(a.username));
    
        setData(descendingSortedData);
  };

  return (
    <Container>
      <Row>
        <div className="mt-5">
          <h2 className="text-center mb-4">User Information</h2>
          <div style={{display:"flex",justifyContent:"center",gap:50}}>
            <Button variant="primary" onClick={ascendingOrder} className="mr-2">Sort Ascending</Button> 
            <Button variant="secondary" onClick={descendingOrder}>Sort Descending</Button>
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
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default Fetch;
