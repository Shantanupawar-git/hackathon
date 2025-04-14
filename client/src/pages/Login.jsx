import React, { useState } from "react";

import { loginUser } from "../services/user";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [info, setInfo] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  // onLogin function when buttom clicked
  // const onLogin = async () => {
  //   if (email.length == 0) alert("Please enter your email");
  //   else if (password.length == 0) alert("Please enter your password");
  //   else {
  //     // api call
  //     const result = await loginUser(email, password);
  //     // check result
  //     if (result["status"] == "Success") navigate("/menupage");
  //     else alert("Error in Login.jsx");
  //   }

  //   // cache the token
  //   const { token } = result['data']
  //   sessionStorage.setItem('token', token)

  // };

// ********************************************************************
    const onLogin = async () => {
    if (info.email.length == 0) alert("Please enter your email");
    else if (info.password.length == 0) alert("Please enter your password");
    else {
      // api call
      const { email, password } = info
      const result = await loginUser(email, password);
      // check result
      if (result["status"] == "Success") navigate("/menupage");
      
    

    // cache the token
    const { token } = result['data']
    sessionStorage.setItem('token', token)
    }

  };



  return (
    <div className="container">
      <h1 className="page-header" style={{ textAlign: "center" }}>
        Login
      </h1>
      <br />

      {/* Enter Email */}
      <div>
        <div className="form-group">
          <label>Email: </label>
          <input
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <br />
      {/* Enter password  */}
      <div>
        <div className="form-group">
          <label>Password: </label>
          <input
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <br />

      {/* Login button  */}
      <div className="mb-3">
        <div className="mb-3">
          Don't have an account yet?
          <Link to="/register">Register here</Link>
        </div>
        <button className="btn btn-success" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
