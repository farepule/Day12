function rangeOfNumbers(startN, endN){
    if(startN === endN ){
        return [startN];
    }else if( startN > endN){
        return "The starting number will always be less or equal to the ending number";
    }else{
        var num = rangeOfNumbers(startN, endN - 1);
        num.push(endN);
        return num;
    }
}
console.log(rangeOfNumbers(1,7));
console.log(rangeOfNumbers(3,10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7,5));
module.exports - rangeOfNumbers;
