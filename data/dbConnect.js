var config = require('./dbConfig');
const sql = require('mssql');
const Sinhvien = require('../models/Sinhvien');

async function getStudent(){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("SELECT * FROM Student");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}
async function postStudent(){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("INSERT INTO Student (Id, Name, MSSV) values ?", {Id:Sinhvien.Id, Name:Sinhvien.Name, MSSV:Sinhvien.MSSV});
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}
module.exports = {
    getStudent : getStudent,
    postStudent : postStudent
}