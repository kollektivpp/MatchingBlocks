// Setup connection to server


// Init button handling

var buttons = document.querySelectorAll( 'button' );

[].forEach.call(buttons, function(elem, index) {
    elem.addEventListener('click', function(event) {
        console.log(event.srcElement);
        //TODO: send commands to server
    });
});
