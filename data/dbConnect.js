var config = require('./dbConfig');
const sql = require('mssql');

async function getStudent(){

    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("SELECT * FROM Student");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {
    getStudent : getStudent
}