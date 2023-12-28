#!/usr/bin/node

//string concatination
console.log("hello" + " javaScript");

// two strings
var message = "HELLO";
var name = "DOREEN";

console.log(message + " there " + name);

//COUNT LENGTH OF TWEET
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Write your tweet here: ', (tweet) => {
  console.log(`You have written ${tweet.length} characters. You have ${280 - tweet.length} characters left.`);
  rl.close();
});


//slice LENGTH OF TWEET to requred length
const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r2.question('Write your tweet here: ', (tweet) => {
  console.log(`${tweet.slice(0, 280)}`);
  r2.close();
});


// capitalize the first letter
const r3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r3.question('ENTER YOUR NAME: ', (name) => {
	console.log(`${name.charAt(0).toUpperCase()}${name.slice(1, name.length)}`);
		r3.close();
});

