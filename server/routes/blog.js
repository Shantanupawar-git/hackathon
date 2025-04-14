const express = require("express");
const pool = require("../db/db");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const router = express.Router();
const result = require("../utils/result");

router.post("/", (request, response) => {
  const { title, contents } = request.body;
  const sql = `insert into blogs title ,contents ,user_Id ,category_Id values(?,?,?,?)`;
  pool.query(
    sql,
    [title, contents, request.user_id, request.category_id],
    (error, data) => {
      response.send(result.createResult(error, data));
    }
  );
});

router.get("/", (request, response) => {
  const sql = `select b.id,b.title,c.id from blogs b,categories c where c.id=b.category_Id`;
  pool.query(sql, (error, data) => {
    response.send(result.createResult(error, data));
  });
});


module.exports=router