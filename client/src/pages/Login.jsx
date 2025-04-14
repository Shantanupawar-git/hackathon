import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <h1 className="page-header" style={{ textAlign: "center" }}>
        Login
      </h1>
      <br />

      {/* Enter Email */}
      <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email: </label>
          <input
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
        <div class="form-group">
          <label for="exampleInputEmail1">Password: </label>
          <input
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
