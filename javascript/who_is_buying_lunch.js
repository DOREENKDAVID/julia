#!/usr/bin/node

// a function that randomly selcts an index from an array and 
// print the value at that index
function whosPaying(arr) {
	const numberOfPeople = arr.length;
	const paying = Math.floor(Math.random() * numberOfPeople + 1);
	return arr[paying];
}
const peopleNames = ["Alice", "Bob", "Charlie", "Diana", "Eva", "Frank"];

const personPaying = whosPaying(peopleNames);
console.log(`${personPaying} is paying`);

