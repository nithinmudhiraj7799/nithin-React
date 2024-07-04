function FormData(){

    return(
     <>
      <form action="/action_page.php" style={{border:"2px solid" ,height:300,width:400 ,padding:20}}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
    />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

     </>
    )
}
export default FormData;