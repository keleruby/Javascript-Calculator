var x = prompt("Please Enter operator you want to perform (e.g  +  , - , / , *)");
var y = prompt("Type a number");
var z = prompt("Type another number");
let result;


if (x == "+") {
    result = Number(y) + Number(z);
} else if (x == "-") {
    result = Number(y) - Number(z);
} else if (x == "/") {
    result = Number(y) / Number(z);
} else if (x == "*") {
     result = Number(y) * Number(z);
};
alert("Result is " + result);