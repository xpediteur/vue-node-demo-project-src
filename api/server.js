const express = require('express');
const path = require('path');
const randomId = require('random-id');
const mysql = require('mysql');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];
const accounts = [];


const connection = mysql.createConnection({
  host: 'myapp2go.cofwv10jsi8x.eu-central-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Strcopy.1',
  port: '3306',
  database: "account"
  
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

}); 


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/dist')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);

});

app.get('/api/accounts', (req, res) => {
  
  connection.query("select * from accounts;", function (err, result, fields) {
    if (err) throw err;
    console.log('AWS accounts called!!!!!!!')
    //console.log(result);

    res.json(result);

  });

});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});