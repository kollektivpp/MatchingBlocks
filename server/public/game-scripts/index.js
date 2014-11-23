var app = app || {};

app.game.init();
app.view.init();

//init of sockets
var socket = io();

var playerBlocks = [];

socket.on('new command', function(msg){
    var blockToMove = undefined;
    console.log('playerID: ' + msg.playerID + ' & message: ' + msg.command);

    for (var i = playerBlocks.length - 1; i >= 0; i--) {
        if (playerBlocks[i].id === msg.playerID) {
            blockToMove = playerBlocks[i];
            break;
        }
    };

    if (!blockToMove) {
        // create block with id
        var x,y;

        y = Math.floor(Math.random() * ((app.game.height / 40 - 3) - 3 + 1)) + 3;
        x = Math.floor(Math.random() * ((app.game.width / 40 - 3) - 3 + 1)) + 3;

        var newBlock = app.game.gridCells[x][y].block = new app.view.Block(x,y);
        newBlock.id = msg.playerID;

        playerBlocks.push(newBlock);
    } else {
        // move block
        switch (msg.command) {
            case "up":
                blockToMove.moveUp();
                break;
            case "down":
                blockToMove.moveDown();
                break;
            case "left":
                blockToMove.moveLeft();
                break;
            case "right":
                blockToMove.moveRight();
                break;
            default:
                break;
        }
    }
});