const express = require("express");
const pool = require("../db/db");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const router = express.Router();
const result = require("../utils/result");

router.post('/',(request,response)=>{
    const{title,description}=request.body
    const sql=`insert into categories(title,description) values(?,?)`
    pool.query(sql,[title,description],(error,data)=>{
        response.send(result.createResult(error,data))
    })
})

router.get('/',(request,response)=>{
    const sql=`select * from categories`
    pool.query(sql,(error,data)=>{
        response.send(result.createResult(error,data))
    })
})

module.exports=router
