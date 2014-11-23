var app = app || {};

app.view =  app.view || {
	init: function() {

	},

	Block: function(gridX, gridY) {
		this.gridX = gridX;
		this.gridY = gridY;

		this.x = gridX * 40;
  		this.y = gridY * 40;

  		this.canMoveTo = function(gridX, gridY) {
  			if (app.game.gridCells[gridX][gridY].block) {
  				return false;
  			}
  			else {
  				return true;
  			}
  		}
 

  		this.moveUp = function() {
  			if (this.gridY > 0 && this.gridY < app.game.height/40 - 1 && this.canMoveTo(this.gridX, this.gridY-1)) this.gridY--;
  		}
  		this.moveDown = function() {
  	 		if (this.gridY > 0 && this.gridY < app.game.height/40 - 1 && this.canMoveTo(this.gridX, this.gridY+1)) this.gridY++;
  		}
  		this.moveLeft = function() {
  			if (this.gridX > 0 && this.gridX < app.game.width/40 - 1 && this.canMoveTo(this.gridX-1, this.gridY)) this.gridX--;
  		}
  		this.moveRight = function() {
  			if (this.gridX > 0 && this.gridX < app.game.width/40 - 1 && this.canMoveTo(this.gridX+1, this.gridY)) this.gridX++;
  		}

		this.update = function() {
			this.x = this.gridX * 40;
  			this.y = this.gridY * 40;
		}

		this.draw = function() {
			app.game.context.fillStyle="#FF0000";
			app.game.context.fillRect(this.x, this.y, 40, 40);
		}
	},

	GridCell: function(gridX, gridY) {
		this.block = undefined;
		this.slot = undefined;
		this.gridX = gridX;
		this.gridY = gridY;
		
		this.draw = function() {
			app.game.context.strokeRect(this.gridX * 40, this.gridY * 40, 40, 40);
			if (this.slot) { 
				app.game.context.fillStyle = this.slot; 
				app.game.context.fillRect(this.gridX * 40, this.gridY * 40, 40, 40);
			}
			if (this.block) { this.block.draw()};
		}

		this.update = function() {
			if (this.block) this.block.update();
		}
	}
};