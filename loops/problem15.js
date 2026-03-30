/* Logic 1
Print all numbers from 1 to 50. But:

If divisible by 3 print "Fizz"
If divisible by 5 print "Buzz"
If divisible by both print "FizzBuzz"
Otherwise print the number
*/
for (let i = 1;i<=50;i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log("fizzbuzz");
    }
    else if (i % 5 === 0)
    {
        console.log("buzz");
    }
    else if (i % 3 === 0)
    {
        console.log("fizz");
    }
    else
    {
        console.log(i);
    }
}
        