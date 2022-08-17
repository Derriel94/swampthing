const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1054;
canvas.height = 850;

c.fillRect(0, 0, canvas.width, canvas.height);
// const gravity = 0.7;
const startline = new Sprite({
	position: {
		x: 0,
		y: 700
	},
	width: 1054,
	height: 5
});

// const boundry = new Sprite({
// 	position: {
// 		x: ,
// 		y: 0
// 	},
// 	width: 1564,
// 	height: 5
// });

const tadpole = new Animal({
	position: {
		x: 750,
		y: 600
	},
	width: 100,
	height: 100,
	color: 'green',
	velocity: {
		x: 0,
		y: 0
	}
});

const croc = new Animal({
	position: {
		x: 550,
		y: 600
	},
	width: 100,
	height: 100,
	color: 'darkgreen',
	velocity: {
		x: 0,
		y: 0
	}
});

const fly = new bug({
	position: {
		x: 900,
		y: 200,
	}, 
	width: 5,
	height: 5,
	color: 'purple',
	velocity: {
		x: 0,
		y: 0
	}
});

const redBeetle = new Bigbug({
	position: {
		x: 400,
		y: 500,
	}, 
	width: 15,
	height: 15,
	color: 'red',
	velocity: {
		x: 0,
		y: 0
	}
});

// const wallCollision = (frog) => {
// 	 if (frog.position.x <= 0 || frog.position.x >= 1554)
// 	 		{
// 	 			frog.velocity.x = 0;
// 	 		}
// }


// function randomNumber(randomNum) {
// 	if (randomNum % 10 !== 0) {
// 		randomNumber(randomNum)
// 	} else {
// 		return (randomNum)
// 	}
// }

// player movement
const keys = {
	ArrowUp: {
		pressed: false
	},
	ArrowDown: {
		pressed: false
	},
	ArrowLeft: {
		pressed: false
	},
	ArrowRight: {
		pressed: false
	}
}
	let timer = 33
	let timerId
const decreaseTimer = () => {

timerId = setTimeout(decreaseTimer, 1000)
	if (timer > 0) {
		timer--
		document.querySelector('#timer').innerHTML = timer;
	}
	if (timer === 0){
		if (tadpole.points <= 25) {
			//end game
			clearTimeout(timerId);
	    document.querySelector('#level-up').style.display = 'flex';
			document.querySelector('#level-up').innerHTML = 'You Evolved!'
			//add to speed by5
			//start points over
			//add swamp createrue
		} else if (tadpole.points === 50) {

		} else if (tadpole.points === 75) {

		}
	}

}
// let animalMovement = (animal) => {
// 	console.log(animal)
// 	if (keys.ArrowUp.pressed && animal.lastKey ==='ArrowUp'){
// 		animal.velocity.y = -5
// 	}
// }
decreaseTimer();


 function animate() {
 	window.requestAnimationFrame(animate)
 	c.fillStyle = 'black';
 	c.fillRect(0,0, canvas.width, canvas.height);
 	tadpole.update();
 	croc.start = false;
 	tadpole.start = true;
 	fly.update();
 	redBeetle.update();
 	startline.update();
 	// animalMovement(t);

 	// frog.velocity.y = -10;
 	// wallCollision(frog);

  // console.log(frog.position.y)
 	// console.log(frog.position.x)
 	//FROG MOVEMENT I can not refactor this into a function,
 	//i think because of how i am referencing the objects
 
 	tadpole.velocity.x = 0;
 	tadpole.velocity.y = 0;
 	if (keys.ArrowUp.pressed && tadpole.lastKey ==='ArrowUp'){
		tadpole.velocity.y = -5
	} else if (keys.ArrowDown.pressed && tadpole.lastKey ==='ArrowDown') {
		tadpole.velocity.y = 5
	} else if (keys.ArrowLeft.pressed && tadpole.lastKey ==='ArrowLeft') {
		tadpole.velocity.x = -5
	} else if (keys.ArrowRight.pressed && tadpole.lastKey ==='ArrowRight'){
		tadpole.velocity.x = 5
	}

	//croc movement
	croc.velocity.x = 0;
 	croc.velocity.y = 0;
 	if (keys.ArrowUp.pressed && croc.lastKey ==='ArrowUp'){
		croc.velocity.y = -10
	} else if (keys.ArrowDown.pressed && croc.lastKey ==='ArrowDown') {
		croc.velocity.y = 10
	} else if (keys.ArrowLeft.pressed && croc.lastKey ==='ArrowLeft') {
		croc.velocity.x = -10
	} else if (keys.ArrowRight.pressed && croc.lastKey ==='ArrowRight'){
		croc.velocity.x = 10
	}

if (tadpole.points >= 25) {
			//end game
	    document.querySelector('#level-up').style.display = 'flex';
			document.querySelector('#level-up').innerHTML = 'You Evolved!';
			timer = 33
	}
 
}

animate();


window.addEventListener('keydown', (event) => {
	console.log(event.key)
if (tadpole.start){
	switch (event.key) {
		case 'ArrowUp':
		keys.ArrowUp.pressed = true
		tadpole.lastKey = 'ArrowUp'
		break
		case 'ArrowLeft':
		keys.ArrowLeft.pressed = true
		tadpole.lastKey = 'ArrowLeft'
		break
		case 'ArrowRight':
		keys.ArrowRight.pressed = true
		tadpole.lastKey = 'ArrowRight'
		break
		case 'ArrowDown':
		keys.ArrowDown.pressed = true
		tadpole.lastKey = 'ArrowDown'
		break
	}
}
if (croc.start) {
	switch (event.key){
		case 'ArrowUp':
		keys.ArrowUp.pressed = true
		croc.lastKey = 'ArrowUp'
		break
		case 'ArrowLeft':
		keys.ArrowLeft.pressed = true
		croc.lastKey = 'ArrowLeft'
		break
		case 'ArrowRight':
		keys.ArrowRight.pressed = true
		croc.lastKey = 'ArrowRight'
		break
		case 'ArrowDown':
		keys.ArrowDown.pressed = true
		croc.lastKey = 'ArrowDown'
		break
	}
}
})

window.addEventListener('keyup', (event) => {
	console.log(event.key)
	switch (event.key) {
		case 'ArrowUp':
		keys.ArrowUp.pressed = false
		break
		case 'ArrowLeft':
		keys.ArrowLeft.pressed = false
		break
		case 'ArrowRight':
		keys.ArrowRight.pressed = false
		break
		case 'ArrowDown':
		keys.ArrowDown.pressed = false
		break
	}
})

window.addEventListener('click', (event) => {
	console.log(event);
})