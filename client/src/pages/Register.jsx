import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="container">
          <h1 className="page-header" style={{ textAlign: "center" }}>
            Register
          </h1>
          <br />
          {/* Name  */}
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Name: </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
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
          {/* Enter Phone number  */}
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Phone number: </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          {/* Login button  */}
          <div className="mb-3">
            <div className="mb-3">
              Already have an account
              <Link to="/">Login here</Link>
            </div>
            <button className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      );
}

export default Register
