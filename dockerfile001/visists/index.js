var express = require('express');
var redis = require('redis');
var process = require('process');

var app = express();
var client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

app.get('/', function (req, res) {
  process.exit(0);
  client.get('visits', function(err, visits) {
    res.send('Numero de visitas es '+visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(3000, function () {
  console.log('ejemplo iniciado en el puerto 3000!');
});
