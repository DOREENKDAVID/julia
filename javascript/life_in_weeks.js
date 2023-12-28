#!/usr/bin/node

function lifeRemaining() {
    const readline = require('readline');
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
r1.question('Enter your current age: ', (age) => {
	const remainingYears = 90 - age;
	const remainingMonths = remainingYears * 12;
	const remainingWeeks = remainingYears * 52;
	const remainingDays = remainingYears * 365;
	const remainingHours = remainingDays * 24;
	const remainingMinutes = remainingHours * 60;
	const remainingSeconds = remainingMinutes * 60;
	console.log(`you have approximately ${remainingDays} years,
		${remainingMonths} months, 
		${remainingWeeks} weeks, 
		${remainingDays} days, 
		${remainingHours} hours, 
		${remainingMinutes} minutes, 
		${remainingSeconds} before you get to 90 years`);
	r1.close();
});
}

lifeRemaining();
