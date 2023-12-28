#!/usr/bin/node


function bmiCalculator() {
	const readline = require('readline');
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Enter your current weight: ', (weight) => {
	    r1.question('Enter your current height: ', (height) => {
		    weight = parseFloat(weight);
	            height = parseFloat(height);
		    const bmi = weight / ((height * 0.3048) ** 2);
		    console.log(`you have a  bmi of ${bmi}`);
	     r1.close();
	    });
    });
}
bmiCalculator();
