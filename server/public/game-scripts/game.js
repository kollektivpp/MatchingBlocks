var app = app || {};

app.game =  app.game || {
    fps: 60,
    width: 1200,
    height: 480,

    gridCells: [], 

    _onEachFrame: (function() {
        var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

        if (requestAnimationFrame) {
            return function(cb) {
                var _cb = function() { cb(); requestAnimationFrame(_cb); }
                _cb();
            };
        } else {
            return function(cb) {
                setInterval(cb, 1000 / Game.fps);
            }
        }
    })(),

    fillSlots: function() {
        // D
        this.gridCells[1][3].slot = new String("#FFF000");
        this.gridCells[1][4].slot = new String("#FFF000");
        this.gridCells[1][5].slot = new String("#FFF000");
        this.gridCells[1][6].slot = new String("#FFF000");
        this.gridCells[1][7].slot = new String("#FFF000");
        this.gridCells[1][8].slot = new String("#FFF000");
        this.gridCells[4][4].slot = new String("#FFF000");
        this.gridCells[4][5].slot = new String("#FFF000");
        this.gridCells[4][6].slot = new String("#FFF000");
        this.gridCells[4][7].slot = new String("#FFF000");
        this.gridCells[2][3].slot = new String("#FFF000");
        this.gridCells[3][3].slot = new String("#FFF000");
        this.gridCells[2][8].slot = new String("#FFF000");
        this.gridCells[3][8].slot = new String("#FFF000");

        // E
        this.gridCells[6][3].slot = new String("#FFF000");
        this.gridCells[6][4].slot = new String("#FFF000");
        this.gridCells[6][5].slot = new String("#FFF000");
        this.gridCells[6][6].slot = new String("#FFF000");
        this.gridCells[6][7].slot = new String("#FFF000");
        this.gridCells[6][8].slot = new String("#FFF000");
        this.gridCells[7][6].slot = new String("#FFF000");
        this.gridCells[7][3].slot = new String("#FFF000");
        this.gridCells[8][3].slot = new String("#FFF000");
        this.gridCells[7][8].slot = new String("#FFF000");
        this.gridCells[8][8].slot = new String("#FFF000");

        // V
        this.gridCells[10][3].slot = new String("#FFF000");
        this.gridCells[10][4].slot = new String("#FFF000");
        this.gridCells[10][5].slot = new String("#FFF000");
        this.gridCells[10][6].slot = new String("#FFF000");
        this.gridCells[10][7].slot = new String("#FFF000");
        this.gridCells[12][3].slot = new String("#FFF000");
        this.gridCells[12][4].slot = new String("#FFF000");
        this.gridCells[12][5].slot = new String("#FFF000");
        this.gridCells[12][6].slot = new String("#FFF000");
        this.gridCells[12][7].slot = new String("#FFF000");
        this.gridCells[11][8].slot = new String("#FFF000");

        // F 
        this.gridCells[14][3].slot = new String("#FFF000");
        this.gridCells[14][4].slot = new String("#FFF000");
        this.gridCells[14][5].slot = new String("#FFF000");
        this.gridCells[14][6].slot = new String("#FFF000");
        this.gridCells[14][7].slot = new String("#FFF000");
        this.gridCells[14][8].slot = new String("#FFF000");
        this.gridCells[15][6].slot = new String("#FFF000");
        this.gridCells[15][3].slot = new String("#FFF000");
        this.gridCells[16][3].slot = new String("#FFF000");

        // E
        this.gridCells[18][3].slot = new String("#FFF000");
        this.gridCells[18][4].slot = new String("#FFF000");
        this.gridCells[18][5].slot = new String("#FFF000");
        this.gridCells[18][6].slot = new String("#FFF000");
        this.gridCells[18][7].slot = new String("#FFF000");
        this.gridCells[18][8].slot = new String("#FFF000");
        this.gridCells[19][6].slot = new String("#FFF000");
        this.gridCells[19][3].slot = new String("#FFF000");
        this.gridCells[20][3].slot = new String("#FFF000");
        this.gridCells[19][8].slot = new String("#FFF000");
        this.gridCells[20][8].slot = new String("#FFF000");

        // S
        this.gridCells[22][3].slot = new String("#FFF000");
        this.gridCells[22][4].slot = new String("#FFF000");
        this.gridCells[22][5].slot = new String("#FFF000");
        this.gridCells[22][6].slot = new String("#FFF000");
        this.gridCells[22][8].slot = new String("#FFF000");
        this.gridCells[23][8].slot = new String("#FFF000");
        this.gridCells[23][6].slot = new String("#FFF000");
        this.gridCells[23][3].slot = new String("#FFF000");
        this.gridCells[24][3].slot = new String("#FFF000");
        this.gridCells[24][6].slot = new String("#FFF000");
        this.gridCells[24][7].slot = new String("#FFF000");
        this.gridCells[24][8].slot = new String("#FFF000");

        // T
        this.gridCells[26][3].slot = new String("#FFF000");
        this.gridCells[27][3].slot = new String("#FFF000");
        this.gridCells[27][4].slot = new String("#FFF000");
        this.gridCells[27][5].slot = new String("#FFF000");
        this.gridCells[27][6].slot = new String("#FFF000");
        this.gridCells[27][7].slot = new String("#FFF000");
        this.gridCells[27][8].slot = new String("#FFF000");
        this.gridCells[28][3].slot = new String("#FFF000");
             
    },

    createBlocks: function() {
        this.gridCells[28][4].block = new app.view.Block(28,4);
        // // D
        // this.gridCells[1][3].block = new app.view.Block(5,5);
        // this.gridCells[1][4].block = new app.view.Block(5,5);
        // this.gridCells[1][5].block = new app.view.Block(5,5);
        // this.gridCells[1][6].block = new app.view.Block(5,5);
        // this.gridCells[1][7].block = new app.view.Block(5,5);
        // this.gridCells[1][8].block = new app.view.Block(5,5);
        // this.gridCells[4][4].block = new app.view.Block(5,5);
        // this.gridCells[4][5].block = new app.view.Block(5,5);
        // this.gridCells[4][6].block = new app.view.Block(5,5);
        // this.gridCells[4][7].block = new app.view.Block(5,5);
        // this.gridCells[2][3].block = new app.view.Block(5,5);
        // this.gridCells[3][3].block = new app.view.Block(5,5);
        // this.gridCells[2][8].block = new app.view.Block(5,5);
        // this.gridCells[3][8].block = new app.view.Block(5,5);

        // // E
        // this.gridCells[6][3].block = new app.view.Block(5,5);
        // this.gridCells[6][4].block = new app.view.Block(5,5);
        // this.gridCells[6][5].block = new app.view.Block(5,5);
        // this.gridCells[6][6].block = new app.view.Block(5,5);
        // this.gridCells[6][7].block = new app.view.Block(5,5);
        // this.gridCells[6][8].block = new app.view.Block(5,5);
        // this.gridCells[7][6].block = new app.view.Block(5,5);
        // this.gridCells[7][3].block = new app.view.Block(5,5);
        // this.gridCells[8][3].block = new app.view.Block(5,5);
        // this.gridCells[7][8].block = new app.view.Block(5,5);
        // this.gridCells[8][8].block = new app.view.Block(5,5);

        // // V
        // this.gridCells[10][3].block = new app.view.Block(5,5);
        // this.gridCells[10][4].block = new app.view.Block(5,5);
        // this.gridCells[10][5].block = new app.view.Block(5,5);
        // this.gridCells[10][6].block = new app.view.Block(5,5);
        // this.gridCells[10][7].block = new app.view.Block(5,5);
        // this.gridCells[12][3].block = new app.view.Block(5,5);
        // this.gridCells[12][4].block = new app.view.Block(5,5);
        // this.gridCells[12][5].block = new app.view.Block(5,5);
        // this.gridCells[12][6].block = new app.view.Block(5,5);
        // this.gridCells[12][7].block = new app.view.Block(5,5);
        // this.gridCells[11][8].block = new app.view.Block(5,5);

        // // F 
        // this.gridCells[14][3].block = new app.view.Block(5,5);
        // this.gridCells[14][4].block = new app.view.Block(5,5);
        // this.gridCells[14][5].block = new app.view.Block(5,5);
        // this.gridCells[14][6].block = new app.view.Block(5,5);
        // this.gridCells[14][7].block = new app.view.Block(5,5);
        // this.gridCells[14][8].block = new app.view.Block(5,5);
        // this.gridCells[15][6].block = new app.view.Block(5,5);
        // this.gridCells[15][3].block = new app.view.Block(5,5);
        // this.gridCells[16][3].block = new app.view.Block(5,5);

        // // E
        // this.gridCells[18][3].block = new app.view.Block(5,5);
        // this.gridCells[18][4].block = new app.view.Block(5,5);
        // this.gridCells[18][5].block = new app.view.Block(5,5);
        // this.gridCells[18][6].block = new app.view.Block(5,5);
        // this.gridCells[18][7].block = new app.view.Block(5,5);
        // this.gridCells[18][8].block = new app.view.Block(5,5);
        // this.gridCells[19][6].block = new app.view.Block(5,5);
        // this.gridCells[19][3].block = new app.view.Block(5,5);
        // this.gridCells[20][3].block = new app.view.Block(5,5);
        // this.gridCells[19][8].block = new app.view.Block(5,5);
        // this.gridCells[20][8].block = new app.view.Block(5,5);

        // // S
        // this.gridCells[22][3].block = new app.view.Block(5,5);
        // this.gridCells[22][4].block = new app.view.Block(5,5);
        // this.gridCells[22][5].block = new app.view.Block(5,5);
        // this.gridCells[22][6].block = new app.view.Block(5,5);
        // this.gridCells[22][8].block = new app.view.Block(5,5);
        // this.gridCells[23][8].block = new app.view.Block(5,5);
        // this.gridCells[23][6].block = new app.view.Block(5,5);
        // this.gridCells[23][3].block = new app.view.Block(5,5);
        // this.gridCells[24][3].block = new app.view.Block(5,5);
        // this.gridCells[24][6].block = new app.view.Block(5,5);
        // this.gridCells[24][7].block = new app.view.Block(5,5);
        // this.gridCells[24][8].block = new app.view.Block(5,5);

        // // T
        // this.gridCells[26][3].block = new app.view.Block(5,5);
        // this.gridCells[27][3].block = new app.view.Block(5,5);
        // this.gridCells[27][4].block = new app.view.Block(5,5);
        // this.gridCells[27][5].block = new app.view.Block(5,5);
        // this.gridCells[27][6].block = new app.view.Block(5,5);
        // this.gridCells[27][7].block = new app.view.Block(5,5);
        // this.gridCells[27][8].block = new app.view.Block(5,5);
        // this.gridCells[28][3].block = new app.view.Block(5,5);
    },

    checkForWin: function() {
        for (var x = 0; x < this.width / 40; x++) {
            for (var y = 0; y < this.height / 40; y++) {
                if (this.gridCells[x][y].slot && !this.gridCells[x][y].block) return false; 
            }
        }
        return true;
    },

    init: function() {

        for (var x = 0; x < this.width / 40; x++) {
            this.gridCells[x] = new Array(12);
            for (var y = 0; y < this.height / 40; y++) {
                this.gridCells[x][y] = new app.view.GridCell(x, y);
            }
        }
    
        //this.createBlocks();
        // this.gridCells[5][5].block = new app.view.Block(5,5);
        // this.gridCells[10][5].block = new app.view.Block(10,5);
        // this.gridCells[15][10].block = new app.view.Block(15,10);
        // this.gridCells[12][2].block = new app.view.Block(12,2);

        this.fillSlots();

      app.game.run = app.game.run();

      app.game.canvas = document.createElement("canvas");
      app.game.canvas.width = app.game.width;
      app.game.canvas.height = app.game.height;

      app.game.context = app.game.canvas.getContext("2d");

      document.body.appendChild(app.game.canvas);

      app.game._onEachFrame(app.game.run);
    },

    run: function() {
        console.log(app.game);
        console.log(this);
      var loops = 0,
          skipTicks = 1000 / app.game.fps,
          maxFrameSkip = 10,
          nextGameTick = (new Date).getTime(),
          lastGameTick;

      return function() {
        loops = 0;

        while ((new Date).getTime() > nextGameTick) {
          app.game.update();
          nextGameTick += skipTicks;
          loops++;
        }

        if (loops) app.game.draw();
      }
    },

    draw: function() {
      app.game.context.clearRect(0, 0, app.game.width, app.game.height);

      for (var x = 0; x < this.width / 40; x++) {
            for (var y = 0; y < this.height / 40; y++) {
                this.gridCells[x][y].draw();
            }
        }
    },
    
    update: function() {
      for (var x = 0; x < this.width / 40; x++) {
            for (var y = 0; y < this.height / 40; y++) {
                this.gridCells[x][y].update();
            }
        }
        if(this.checkForWin()) alert("WIN!!!");
    } 


};