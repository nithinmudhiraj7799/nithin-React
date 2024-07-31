import UseCounter from "./useCounter"


const CounterExample=()=>{

    const[Counter,incrementCount,decrementCount,resetCount]=UseCounter(10,2)
 const[Age,incrementAge,decrementAge,resetAge]=UseCounter(15,1)
 const[salary,incrementSalary]=UseCounter(10000,1000)
    return(
        <div>
            <h1>{Counter}</h1>
            <h1>{Age}</h1>
            <h1>{salary}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementAge}>hello</button>
            <button onClick={incrementAge}>AgeIncrement</button>

            <button onClick={incrementSalary}>salary</button>

        </div>
    )
}
export default CounterExample;