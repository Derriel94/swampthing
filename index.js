const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1554;
canvas.height = 900;

c.fillRect(0, 0, canvas.width, canvas.height);
// const gravity = 0.7;
const startline = new Sprite({
	position: {
		x: 0,
		y: 700
	},
	width: 1564,
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

const frog = new SwampCreature({
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
})

const wallCollision = (frog, wall) => {

}


// function randomNumber(randomNum) {
// 	if (randomNum % 10 !== 0) {
// 		randomNumber(randomNum)
// 	} else {
// 		return (randomNum)
// 	}
// }

 function animate() {
 	window.requestAnimationFrame(animate)
 	c.fillStyle = 'black';
 	c.fillRect(0,0, canvas.width, canvas.height);
 	frog.update();
 	fly.update();
 	startline.update();

 	// frog.velocity.y = -10;
 	console.log(fly.position.y)
 	console.log(fly.position.x)
  console.log(frog.position.y)
 	console.log(frog.position.x)

 
}

animate();


window.addEventListener('keydown', (event) => {
	console.log(event.key)
	switch (event.key) {
		case 'ArrowUp':
		frog.velocity.y = -5
		break
		case 'ArrowLeft':
		frog.velocity.x = -5
		break
		case 'ArrowRight':
		frog.velocity.x = 5
		break
		case 'ArrowDown':
		frog.velocity.y = 5
		break
	}
})

window.addEventListener('keyup', (event) => {
	console.log(event.key)
	switch (event.key) {
		case 'ArrowUp':
		frog.velocity.y = 0
		break
		case 'ArrowLeft':
		frog.velocity.x = 0
		break
		case 'ArrowRight':
		frog.velocity.x = 0
		break
		case 'ArrowDown':
		frog.velocity.y = 0
		break
	}
})