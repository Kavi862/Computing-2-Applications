// Factorial function x!
const factorial = function (x) {
    if (x <= 0) {
        return 0;
    } else {
        return (x * (x - 1));
    }
};


// Countdown funcion
const countdown = function (x) {
    if (x <= 0) {
        return 0;
    } else {
        console.log(x);
        return countdown(x - 1);
    }
};


// Fibonacci Sequence
const fibonacci = function (x, y) {
    var myList = [];
    myList.push(x, y);
    myList.push(myList[0] + myList[1]);
    myList.push(myList[1] + myList[2]);
    myList.push(myList[2] + myList[3]);
    myList.push(myList[3] + myList[4]);
    myList.push(myList[4] + myList[5]);
    return myList;
};


// Another Fibonacci sequence
const fib = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
};

debugger;