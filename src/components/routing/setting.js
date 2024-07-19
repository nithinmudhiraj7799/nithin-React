import React, { useContext } from "react";
import addProfileHoc from "../Hoc/logging";
  
function Setting(props){
  console.log(props,"from setting screen")
  // function settingScreen(){
  // const DataChange=useContext(profileWrapper)
    // }
    return(
        <>
        <h1>this is a setting component</h1>
        <h2>welcome  {props.data.name}</h2>
        </>
    )
}
export default addProfileHoc( Setting);