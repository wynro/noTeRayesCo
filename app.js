var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/getVisits', function(req,res){
  function random (low, high) { return (Math.random() * (high - low) + low) | 0; };
  res.send(JSON.stringify(random(1,10000)));
});

var server = app.listen(process.env.PORT || 8080, function(){
    var port = server.address().port;
    var host = server.address().address;
    console.log("Server running on http://" + host + ":" +port);
});
