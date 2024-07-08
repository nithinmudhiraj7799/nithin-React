function WetherAppUi(){
 return(
    <>
     <div style={{display:"grid", justifyContent:"center", alignItems:"center", padding:200}}>
        <div style={{border:"2px ridge ", height:"auto", width:250, display:"grid", justifyContent:"center", alignItems:"center" }}>
        <h1>WetherApp</h1>
        <input type="text" placeholder="enter a city" name="nn" id="nn" onChange={{}}/>
        {/* <label for="nn" />  */}
        <button>click</button>
        <p>India</p>
        <h1>weter report</h1>
        
        </div>
        </div>
    </>
 )
}
export default WetherAppUi;