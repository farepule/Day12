function myCounter(n) {
  if (n <= 1) {
    return [];
  } else {
    var myNewCounter = myCounter(n - 1);
    myNewCounter.unshift(n);

    return myNewCounter;
  }
}
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports - myCounter;
