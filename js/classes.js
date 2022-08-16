class Sprite {
	constructor({position, width, height}){
		this.position = position;
		this.width = width;
		this.height = height;

	}

	draw(){
		c.fillStyle = 'red';
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}

	update() {
		this.draw();
	}
}


class SwampCreature extends Sprite {
	constructor({position, width, height, color, velocity}){
		super({

		})
		this.position = position;
		this.width = width;
		this.height = height;
		this.color = color;
		this.velocity = velocity;
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
	update() {
		this.draw();
		//this is the base algorithom for player movement
	    this.position.y += this.velocity.y;
	    this.position.x += this.velocity.x;
	}

}

function getRandomX() {
  return getRandomInt(0, 250) * 5; // Returns 10, 20, 30, 40 or 50
}
function getRandomY() {
  return getRandomInt(0, 150) * 5; // Returns 10, 20, 30, 40 or 50
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let randomX = Math.round(Math.floor(Math.random() * 1501));
// let randomY = Math.round(Math.floor(Math.random() * 901));
class bug extends SwampCreature {
	constructor({position, width, height, color, velocity}){
		super({position, width, height, color, velocity})
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
	update() {
		this.draw();
		//serves as a start position
	    this.position.y += this.velocity.y;
	    this.position.x += this.velocity.x;
	    	if (
 			this.position.x > frog.position.x 
 			&& 
 			this.position.x < frog.position.x + frog.width
 			&&
 			this.position.y > frog.position.y
 			&& 
 			this.position.y < frog.position.y + frog.height
 		) {
 		this.position.x = getRandomX();
 		this.position.y = getRandomY();
 		}
	}

}