const express = require("express");
const pool = require("../db/db");
const cryptoJs = require("crypto-js");
const jwt=require('jsonwebtoken')
const config=require('../utils/config')
const router = express.Router();
const result = require("../utils/result");

router.post("/register", (request, response) => {
  const { full_name, email, password, phone_no } = request.body;
  const encryptedPassword = cryptoJs.SHA256(password).toString();
  const sql = `insert into user(full_name,email,password,phone_no) values(?,?,?,?)`;
  pool.query(
    sql,
    [full_name, email, encryptedPassword, phone_no],
    (error, data) => {
      response.send(result.createResult(error, data));
    }
  );
});

router.post("/login", (request, response) => {
  const { email, password } = request.body;
  const encryptedPassword = cryptoJs.SHA256(password).toString();
  const sql = `select * from user where email=? and password=?`;
  pool.query(sql, [email, encryptedPassword], (error, data) => {
    if (data) {
      if (data.length != 0) {
        const payload = {
          userId: data[0].id,
        };
        const token = jwt.sign(payload, config.secret);
        const body = {
          token: token,
        };
        response.send(result.createSuccessResult(body));
      } else {
        response.send(result.createErrorResult("Invalid email or password"));
      }
    } else response.send(result.createErrorResult(error));
  });
});


module.exports=router