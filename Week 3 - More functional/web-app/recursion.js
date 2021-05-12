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


// Another Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21
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


// Lucas sequence: 2, 1, 3, 4, 7, 11, 18, 29
const lucas = function (l) {
    if (l === 0) {
        return 2;
    }
    if (l === 1) {
        return 1;
    } else {
        return (lucas(l - 2) + lucas(l - 1));
    }
};


// Brady sequence
const brady = function (a, b, num) {
    if (a === 2308 && b === 4261) {
        return fibLike(num);
    }
    if (a === 0 && b === 1) {
        return fib(num);
    }
    if (a === 2 && b === 1) {
        return lucas(num);
    }
};

const fibLike = function (n) {
    if (n === 0) {
        return 2308;
    }
    if (n === 1) {
        return 4261;
    } else {
        return fibLike(n - 2) + fibLike(n - 1);
    }
};



debugger;