import React, { useState } from "react";
import { userRegister } from "../services/user";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [userInfo, setUserInfo] = useState({
    full_name: "",
    email: "",
    password: "",
    phone_no: "",
  });

  const navigate = useNavigate();

  // onRegister function when clicked on Register buttom
  const onRegister = async () => {
    // api call
    const { full_name, email, password, phone_no } = userInfo;
    const result = await userRegister(full_name, email, password, phone_no);
    // console.log("AAya")

    // check result
    if (result['status'] == "Success") {
      console.log("AAya")

      // alert("User Register Successfully.!!!!!!!!");
      navigate("/");
    } else {
      alert("Error occured on register.jsx");
    }
  };
  return (
    <div className="container">
      <h1 className="page-header" style={{ textAlign: "center" }}>
        Register
      </h1>
      <br />
      {/* Name  */}
      <div>
        <div class="form-group">
          <label>Name: </label>
          <input
            onChange={(e) => {
              setUserInfo({ ...userInfo, full_name: e.target.value });
            }}
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
          <label>Email: </label>
          <input
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
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
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
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
            onChange={(e) => {
              setUserInfo({ ...userInfo, phone_no: e.target.value });
            }}
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
        <button className="btn btn-success" onClick={onRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
