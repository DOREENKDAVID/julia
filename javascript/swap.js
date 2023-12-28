var a = 3;
var b = 8;

//swap a and b using temp
var temp  = a;
a = b;
b = temp;

// print
console.log("a is " +a);
console.log("b is " +b);


// swap withut temp variable
[a, b] = [b, a];
