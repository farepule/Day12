function sumFibonacci(num){
   if (num <= 1){
       return [0,1];
   } else{
        var sum = sumFibonacci(num - 1);
        sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
            return sum;
   }
};
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
module.exports - sumFibonacci;
