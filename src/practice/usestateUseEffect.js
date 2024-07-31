import React, { useState } from "react";

const Info = () => {
  const [data] = useState([
    {
      name: "nithin",
      age: 20,
      salary: 20000
    },
    {
      name: "amruth",
      age: 21,
      salary: 25000
    },
    {
      name: "kiran",
      age: 21,
      salary: 22000
    }
  ]);

  const filteredData = data.filter((e) => e.salary >= 20000);

  return (
    <>
      <h1>Filtered Data</h1>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Age: {item.age}, Salary: {item.salary}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Info;


//  import { Component } from "react";

// class Info extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [
//         {
//           name: "nithin",
//           age: 20,
//           salary: 20000
//         },
//         {
//           name: "amruth",
//           age: 21,
//           salary: 25000
//         },
//         {
//           name: "kiran",
//           age: 21,
//           salary: 22000
//         }
//       ]
//     };
//   }

//   render() {
//     const filteredData = this.state.data.filter((e) => e.age <= 20);

//     return (
//       <>
//         <h1>Filtered Data</h1>
//         <ul>
//           {filteredData.map((item, index) => (
//             <li key={index}>
//               Name: {item.name}, Age: {item.age}, Salary: {item.salary}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Info;

