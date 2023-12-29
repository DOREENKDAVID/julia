#!/usr/bin/node


//funtion that decrements the bottles from 99 to 0

function bottles() {
	let bottleCount = 99;
	while (bottleCount >= 1) {
		console.log(`${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.`);
		console.log(`Take one down and pass it around, ${bottleCount - 1} bottles of beer on the wall.`);
		console.log("");

	
		bottleCount--;
		if (bottleCount === 0) {
			console.log(`No more bottles of beer on the wall, no more bottles of beer`);
			console.log(`Go to the store and buy some more, 99 bottles of beer on the wall`);
		}
	}
}
bottles();
