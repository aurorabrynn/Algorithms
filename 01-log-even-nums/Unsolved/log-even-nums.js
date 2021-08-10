// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
    var array = num.filter(number => number % 2 === 0);
    console.log(array);
};
