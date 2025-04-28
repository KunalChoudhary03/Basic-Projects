const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Iloveali15121472',
    database: 'VendorManagement'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = db;
