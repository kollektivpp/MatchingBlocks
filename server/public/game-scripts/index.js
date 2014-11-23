var app = app || {};

app.game.init();
app.view.init();

//init of sockets
var socket = io();

socket.on('new command', function(msg){
    console.log('playerID: ' + msg.playerID + ' & message: ' + msg.command);
    
});