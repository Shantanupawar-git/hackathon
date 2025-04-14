const express = require("express");
const pool = require("../db/db");
const jwt=require('jsonwebtoken')
const config=require('../utils/config')
const router = express.Router();
const result = require("../utils/result");

router.post('/',(request,response)=>{
    const sql=`insert into `
})