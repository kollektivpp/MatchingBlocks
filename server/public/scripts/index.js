// Setup connection to server
var socket = io();
var userID = Math.round(Math.random()*1000000) + 1;
socket.emit('add player');

// Init button handling

var buttons = document.querySelectorAll( 'button' );

[].forEach.call(buttons, function(elem, index) {
    elem.addEventListener('click', function(event) {
        console.log(event.srcElement);
        socket.emit('control sent', event.srcElement.dataset.direction);
    });
});
