var config = require('./dbConfig');
const sql = require('mssql');
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES; 

async function getStudent(){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("SELECT * FROM sinhvien");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {
    getStudent : getStudent
}