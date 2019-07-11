var mysql = require('mysql');
var connection;

if(process.env.JAWSBD_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "kaykay@49thieves",
        database: "burger_db"
    });
};