const mysql=require('mysql2')

const pool =mysql.createPool({
   host:'localhost',
   user:'D6_89703_Shantanu',
   password:'manager',
   database:'hackathon'
})

module.exports=pool