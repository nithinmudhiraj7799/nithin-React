// import { useContext } from "react"
// import { AppContext } from "./youtubeEx";


// const Profile=()=>{

//    const mobile=useContext(AppContext)

//     return(
//         <>
//         <h1>name:nithin</h1>
//         <h2>mobile:{mobile}</h2>
//         </>
//     )
// }
// export default Profile;

import React, { useContext } from "react";
import { AppContext } from "./youtubeEx";


const Profile = () => {
    const mobile = useContext(AppContext);

    return (
        <>
            <h1>Name: Nithin</h1>
            <h2>Mobile: {mobile}</h2>
        </>
    );
};

export default Profile;
