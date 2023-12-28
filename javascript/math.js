#!/usr/bin/node

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    if (y === 0) {
        return null;
    } else {
        return x / y;
    }
}

function GC_content(seq) {
    const gc_count = (seq.toUpperCase().match(/CG/g) || []).length;
    const total = (gc_count / seq.length) * 100;
    return total;
}

function calculator() {
    console.log("1: add, 2: sub, 3: mul, 4: div, 5: GC_content");
    const readline = require('readline');
    const choices = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    choices.question('Choose operation: ', (choice) => {
        choice = parseInt(choice);
        if (choice >= 1 && choice <= 5) {
            if (choice >= 1 && choice <= 4) {
                const x = parseFloat(readlineSync.question('Enter first number: '));
                const y = parseFloat(readlineSync.question('Enter second number: '));

                if (choice === 1) {
                    const result = add(x, y);
                    console.log("Result: ", result);
                } else if (choice === 2) {
                    const result = sub(x, y);
                    console.log("Result: ", result);
                } else if (choice === 3) {
                    const result = mul(x, y);
                    console.log("Result: ", result);
                } else if (choice === 4) {
                    const result = div(x, y);
                    if (result === null) {
                        console.log("Cannot divide by zero!");
                    } else {
                        console.log("Result: ", result);
                    }
                }
            } else if (choice === 5) {
                const seq = readlineSync.question('Enter valid sequence: ');
                const result = GC_content(seq);
                console.log("Result: ", result);
            }
        } else {
            console.log("Invalid choice");
        }
        choices.close();
    });
}

calculator();

