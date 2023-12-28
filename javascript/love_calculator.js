#!/usr/bin/node


function loveCalculator() {
    const readline = require('readline');
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Enter your name: ', (lover) => {
        r1.question('Enter your lovers name: ', (loved) => {
		let charm = Math.random();
		charm = charm * 100;
		Math.floor(charm) + 1;
		if (charm > 70) {
			console.log(`${lover} ❤  ${loved} love score by Dr love is ${charm}%
				you love each other like kanye loves kanye`);
		}
		else if (charm >30 && charm <= 70) {
			console.log(`${lover} ❤  ${loved} love score by Dr love is ${charm}%`);
		}
		else {
			console.log(`${lover} ❤  ${loved} love score by Dr love is ${charm}%
				you are like oil and water`);
		}

		r1.close();
	});
    });
}

loveCalculator();
