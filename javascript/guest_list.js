#!/usr/bin/node

function isInGuestList() {
    const readline = require('readline');
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question('Enter your name: ', (name) => {
	    const guestList = ['doreen', 'kinya', 'david', 'james', 'catherine'];

	    guestName = name.toLowerCase();

	    if (guestList.includes(guestName)) {
		    console.log(`Welcome to the party`);
	    }
	    else {
		    console.log(`guest not invited`);
	    }
	    r1.close();
    });
}
isInGuestList();
