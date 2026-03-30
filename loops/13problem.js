//Find the sum of all odd numbers between 1 and 100.
let n =100;
let sum = 0;
for (let i =1;i<=n;i++)
{
    if (i %2 != 0)
    {
        sum +=i;
    }
}
console.log(sum);