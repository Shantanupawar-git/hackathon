const mysql=require('mysql2')

const pool =mysql.createPool({
   host:'localhost',
   user:'D6_89487_Mayank',
   password:'manager',
   database:'hackathon'
})

module.exports=pool