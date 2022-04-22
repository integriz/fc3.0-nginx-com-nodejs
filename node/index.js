const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

connection.connect();

const sql = `INSERT INTO people(name) VALUES ('Wesley ` + Date.now() + `')`
connection.query(sql)

app.get('/', function(req, res) {
   connection.query('SELECT * FROM people', function (error, results) {
   if (error) { 
     throw error
   };
   var nomes = "";
   results.forEach(function(row, i) {
    nomes += row.name + "</br>";
   })
   res.send('<h1>Full Cycle Rocks!</h1></br></br><b>Lista de nomes cadastrada no banco de dados:</b></br></br>' + nomes);
  });
});

app.listen(5000, function() {
    console.log('Listening on port 5000');
})
