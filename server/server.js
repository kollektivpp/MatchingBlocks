var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var playerIDs = [];

// Routing
// app.use( express.static('/client') );
// app.use( bodyParser.json() );
// app.use( bodyParser.urlencoded() );
// app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);

// app.get('/', function(req, res) {
//     res.render('index.html');
// });



app.use(express.static(__dirname + '/public'));

app.get('/player', function(req, res){
    var requestedConnectionID = req.param('socketID');
    console.log(requestedConnectionID);
    res.sendFile(__dirname + '/index.html');
});

app.get('/game', function(req, res){
    var requestedConnectionID = req.param('socketID');
    console.log(requestedConnectionID);
    res.sendFile(__dirname + '/game-index.html');
});

app.get( '/*' , function( req, res, next ) {
 
            //This is the current file they have requested
        var file = req.params[0]; 
 
            //For debugging, we can track what files are requested.
        if(verbose) console.log('\t :: Express :: file requested : ' + file);
 
            //Send the requesting client the file.
        res.sendfile( __dirname + '/' + file );
 
    }); //app.get *

io.on('connection', function(socket){
  console.log('a user connected');
  playerIDs.push(socket.id);
  console.log(playerIDs);

  socket.emit('')

  socket.on('control sent', function(msg){
    console.log('message: ' + msg);

    console.log('message: socketID: ' + socket.id + 'message: ' + msg);
  });

});

http.listen(8080, function(){
  console.log('listening on *:8080');
});


// /**
//  * The boilerplate was proudly stolen from https://github.com/kollektivpp/BeatingBlocks :-D 
//  */

// var path = require('path'),
//     express = require('express'),
//     app = express(),
//     http = require('http').Server(app),
//     colors = require('colors'),
//     port = process.env.PORT || 8888,
//     io = require('socket.io')(http),
//     // bodyParser = require('body-parser'),
//     // fs = require('fs-extra'),
//     renderClients = [];



// // // Routing
// // app.use( express.static(__dirname + '/public') );
// // app.use( bodyParser.json() );
// // app.use( bodyParser.urlencoded() );
// // app.set('views', __dirname + '/public');
// // app.engine('html', require('ejs').renderFile);


// // app.get('/controller', function(req, res) {
// //     res.render('controller.html');
// // });
// // app.get('/client', function(req, res) {
// //     res.render('renderClient.html');
// // });


// // Socket Stuff
// io.on('connection', function(socket) {
    
//     socket.on('connectClient', function() {
//         renderClients.push(this);
//     });

//     socket.on('heartbeat', function(pulse) {
//         renderClients.forEach(function(client) {
//             client.emit('heartbeat', pulse);
//         });
//     });
//     socket.on('deviceorientation', function(event) {
//         // event.absolute | event.alpha | event.beta | event.gamma
//         renderClients.forEach(function(client) {
//             client.emit('deviceorientation', event);
//         });
//     });
// });



// // HTTP Server
// http.listen(8888, function() {
//     console.log('listen on port ' + '8888'.rainbow);
// });


// console.log('Server has started');

