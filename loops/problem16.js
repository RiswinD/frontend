//Find the sum of digits of a number.
let n =1234;
let sum = 0;
while (n>0)
{
    let a = n%10;
    sum += a;
    n =Math.floor(n/10);
}
console.log(sum);