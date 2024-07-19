// import { createContext } from "react";


// export const AppContext=createContext()

//  const ContextProvider=(props)=>{

//     const mobile=8247456430
    
// return(
//     <AppContext.Provider value={mobile}>
//      {props.children}
//     </AppContext.Provider>
// )
// }
// export default ContextProvider;  

import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const mobile ="+91 8247456430";
    
    return (
        <AppContext.Provider value={mobile}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
