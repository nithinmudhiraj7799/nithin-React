





// const ReducerFunction=(state,action)=>{
//   switch(action.type){
//    case"Book Tickets":
//    return{...state,bookedTickets:state.bookedTickets+action.noOfTickets,totalAvailableTickets:state.totalAvailableTickets-action.noOfTickets};
//    case"Hold Tickets":
//    return{...state,holdTickets:state.holdTickets+action.noOfTickets,toTalHoldTickets:state.toTalHoldTickets-action.noOfTickets};
//    default:
//     return state;
//   }
  
// };
// const state={
//     totalAvailableTickets:100,
//     BookedTickets:40,
//     toTalHoldTickets:40,
// }
//  export const UseReducer=()=>{
//     const [currentState, dispatch ]=useReducer(ReducerFunction,state)
//     const bookingFunction=()=>{
//         dispatch({
//             type:"Book Tickets",
//             noOfTickets:1
//         });
//     }
//     const holdingTicketFunction=()=>{
//         dispatch({
//             type:"Hold Tickets",
//             noOfTickets:1
//         })
//     }
//     return<>
//       <h1>available tickets{currentState.totalAvailableTickets}</h1>
//       <h1>booked tickets{currentState.bookedTickets}</h1>
//       <h1>hold tickets{currentState.holdTickets}</h1>

//       <button onClick={bookingFunction}></button>
//       <button onClick={holdingTicketFunction}></button>
//       <button onClick={bookingFunction}></button>
//     </>
// };
// export default ReducerFunction;


// import { useReducer } from "react"
//  export const ReducerFunction=(state,action)=>{
//   switch(action.type){
//     case("Book_Tickets"):
//     return{...state,bookedTickets:state.bookedTickets+action.noOfTickets,totalAvailableTickets:state.totalAvailableTickets-action.noOfTickets}
//     case("Hold_Tickets"):
//     return{...state,holdTickets:state.holdTickets+action.noOfTickets}
//   }
  
// }

// const state={
//     totalAvailableTickets:100,
//     bookedTickets:20,
//     holdTickets:20
// }

//   const UseReducer=()=>{
//     const [currentState,dispatch]=useReducer(ReducerFunction,state)

//     const bookingFunction=()=>{
//   dispatch({
//     type:"Book_Tickets",
//     noOfTickets:1
//   })
// }
//   const holdingTicketFunction=()=>{
//     dispatch({
//         type:"Hold_Tickets",
//         noOfTickets:1
//     })
//   }
    
//     return<>
//     <h1>available tickets{currentState.totalAvailableTickets }</h1>
//     <h1>BookedTickets {currentState.bookedTickets }</h1>
//     <h1>Hold Tickets {currentState.holdTickets }</h1>

//     <button onClick={bookingFunction}>BookedTickets</button>
//     <button onClick={holdingTicketFunction}  >Hold tickets</button>
//     </>
// }
//  export default UseReducer;

// import { useReducer } from "react";

// const ChocolateBox=(state,action)=>{
// switch(action.type){
//     case("BuyChocolate"):
//     return{...state,buyChocolate:state.buyChocolate+action.noOfChocolates,totalAvailableChocolate:state.totalAvailableChocolate-action.noOfChocolates}
//     case("ReturnChocolate"):
//     return{...state,returnChocolate:state.returnChocolate+action.noOfChocolates}
//     default :state;
// }
// }
// state={
//     totalAvailableChocolate:200,
//     buyChocolate:50,
//     returnChocolate:40
// }

// const ChocolateShop=()=>{
// const [currentState,dispatch]=useReducer(ChocolateBox,state)

// const BuyChocolateFunction=()=>{
//     dispatch({
//         type:"BuyChocolate",
//         noOfChocolates:2
//     })
// }
// const ReturnChocolateFunction=()=>{
//    dispatch({
//     type:"ReturnChocolate",
//     noOfChocolates:2
//    })
// } 


// return<>
// <h1> AVAILABLE CHOCOLATES{currentState.totalAvailableChocolate}</h1>
// <h1> BUY CHOCOLATES{currentState.buyChocolate}</h1>
// <h1>RETURN CHOCOLATES{currentState.returnChocolate}</h1>
// <button onClick={BuyChocolateFunction} >buyChocolates</button>
// <button onClick={ReturnChocolateFunction}>ReturnChocolates</button>
// </>


// }
// export default ChocolateShop;