var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Mundo dentro del servidor ...!');
});

app.listen(3000, function () {
  console.log('ejemplo iniciado en el puerto 3000!');
});
