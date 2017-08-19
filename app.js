var express = require('express');
var bodyParser = require('body-parser');

var nVisits = 0;

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/setVisits', function(req,res) {
    var visits = req.body.value;
    if (visits) {
        nVisits = visits;
    }
});

app.get('/getVisits', function(req,res){
    var nVisits = 0;
    if (nVisits) {
        res.send(JSON.stringify(nVisits));
    } else {
        res.send(JSON.stringify('unos cuantos'));
    }
});

var server = app.listen(process.env.PORT || 8080, function(){
    var port = server.address().port;
    var host = server.address().address;
    console.log("Server running on http://" + host + ":" +port);
});
