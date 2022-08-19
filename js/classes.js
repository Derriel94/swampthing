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
	clearScreen() {
		c.clearRect(0,0,0,0);
	}
}


class Animal extends Sprite {
	constructor({position, width, height, color, velocity}){
		super({
			position,
			width,
			height,
		})
		this.color = color;
		this.velocity = velocity;
		this.points = 0;
		this.lastKey;
		this.start;
		this.levelone = true;
		this.leveltwo = false;
		this.levelthree = false;
		this.prey = false;
		this.life = 5;
		this.gameover = false;
		this.runAnimation === true;
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

	    if (this.position.x + this.velocity.x <= 0)
	 	{
	 		this.velocity.x = 0;
	 		this.position.x = 0;
	 	} else if (this.position.x + this.width + this.velocity.x >= 1054){
	 		this.velocity.x = 0;
	 		this.position.x = 954;
	 	} else if (this.position.y + this.velocity.y <= 0){
	 		this.velocity.y = 0;
	 		this.position.y = 0;
	 	} else if (this.position.y + this.height + this.velocity.y >= 850) {
	 		this.velocity.y = 0;
	 		this.position.y = 750;
	 	}
	}
	clearScreen() {
		c.clearRect(0,0,0,0);
	}


}

function getRandomX() {
  return getRandomInt(0, 150) * 5; // Returns multipls of 5
}
function getRandomY() {
  return getRandomInt(0, 150) * 5; // Returns multipls of 5
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let randomX = Math.round(Math.floor(Math.random() * 1501));
// let randomY = Math.round(Math.floor(Math.random() * 901));
class bug extends Animal {
	constructor({position, width, height, color, velocity}){
		super({position, width, height, color, velocity})
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
	update() {
		this.draw();
		//this is the 
	    // this.position.y += this.velocity.y;
	    // this.position.x += this.velocity.x;
	    //frog eats bug
	    if (
 			this.position.x > tadpole.position.x 
 			&& 
 			this.position.x < tadpole.position.x + tadpole.width
 			&&
 			this.position.y > tadpole.position.y
 			&& 
 			this.position.y < tadpole.position.y + tadpole.height
 		) {
 		this.position.x = getRandomX();
 		this.position.y = getRandomY();
 		tadpole.points += 3;
 		document.querySelector('#display-points').innerHTML = tadpole.points
 		}
	}


}

class Bigbug extends bug {
	constructor({position, width, height, color, velocity}){
		super({position, width, height, color, velocity})
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
	update() {
		this.draw();
		//this is the 
	    // this.position.y += this.velocity.y;
	    // this.position.x += this.velocity.x;
	    if (
 			this.position.x >= tadpole.position.x 
 			&& 
 			this.position.x < tadpole.position.x + tadpole.width
 			&&
 			this.position.y >= tadpole.position.y
 			&& 
 			this.position.y < tadpole.position.y + tadpole.height
 		) {
 		this.position.x = getRandomX();
 		this.position.y = getRandomY();
 		tadpole.points += 5;
 		document.querySelector('#display-points').innerHTML = tadpole.points
 		} else {

 		}
	}

}

class SwampCreature extends Bigbug {
	constructor({position, width, height, color, velocity}){
		super({position, width, height, color, velocity})
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
	update() {
		this.draw();
		//this is the 
	    // this.position.y += this.velocity.y;
	    // this.position.x += this.velocity.x;
	    if (
 			this.position.x >= tadpole.position.x 
 			&& 
 			this.position.x < tadpole.position.x + tadpole.width
 			&&
 			this.position.y >= tadpole.position.y
 			&& 
 			this.position.y < tadpole.position.y + tadpole.height
 		) {
 		this.position.x = getRandomX();
 		this.position.y = getRandomY();
 		tadpole.points = tadpole.points -10;
 		tadpole.life = tadpole.life -1;
 		document.querySelector('#display-points').innerHTML = tadpole.points
 		}
	}

}