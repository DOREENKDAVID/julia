#!/usr/bin/node


function multiples() {
	//function that prints Fizz on multiples of 3
	//Buzz on multiples of 5
	//FizzBuzz on multiples of 3 and 5
	//append results to an array
	
	let numbers = [];
        for (let i = 1; i <= 100; i++) {
		
                if (i % 3 === 0) {
                        numbers.push("Fizz");
                }       
                else if (i % 5 === 0) {
                        numbers.push('Buzz');
                }       
                else if (i % 3 === 0 && i % 5 === 0) {
			numbers.push('FizzBuzz');
		}
		else {
			numbers.push(i);
		}
		
	}
	return numbers;
}
const results = multiples();
console.log(results);
