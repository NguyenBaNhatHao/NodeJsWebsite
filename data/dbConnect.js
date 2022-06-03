var config = require('./dbConfig');
const sql = require('mssql');
const Sinhvien = require('../models/Sinhvien')
async function getStudents(){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("SELECT * FROM Student");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}
async function getStudent(studentId){
    try {
        let pool = await sql.connect(config);
        let student = await pool.request().input('input_parameter',sql.Int, studentId).query("SELECT * FROM Student where Id = @input_parameter");
        return student.recordsets
    } catch (error) {
        console.log(error)
    } 
}

async function addStudent(Sinhvien){
    try {
        let pool = await sql.connect(config);
        let student = await pool.request()
        .input('Id',sql.Int, Sinhvien.Id)
        .input('Name',sql.NVarChar, Sinhvien.Name)
        .input('MSSV',sql.VarChar, Sinhvien.MSSV)
        .execute('InsertStudent');
        return student.recordsets
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {
    getStudents : getStudents,
    getStudent : getStudent,
    addStudent : addStudent
}