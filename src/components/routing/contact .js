
// import React, { useContext } from "react";
// import { ProfileWrapper } from "./stack";
// function Contact(){
//     const ProfileInfo=useContext(ProfileWrapper)
//     console.log(ProfileInfo)

//     const changeName=()=>{
//    ProfileInfo.changeName("ram")
//     };
//     return(
//         <>
//         <button onClick={changeName}>change Name</button>
//         <h1>welcome Contact component{ProfileInfo.profileInfo.name} </h1>
//         </>
//     )
// }
// export default Contact;

import React, { useContext } from "react";
import { ProfileWrapper } from "./stack";

function Contact() {
  const ProfileInfo = useContext(ProfileWrapper);
  console.log(ProfileInfo);

  const changeName = () => {
    ProfileInfo.ChangeName("ram");
  };

  return (
    <>
      <button onClick={changeName}>Change Name</button>
      <h1>Welcome to the Contact component {ProfileInfo.profileInfo.name}</h1>
    </>
  );
}

export default Contact;