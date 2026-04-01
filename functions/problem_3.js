//Write a function that checks if a number is prime. Return true or false.
function prime(n)
{
    let isprime = true;
   
        for (let j=2;j<n;j++)
        {
            if(n % j === 0)
            {
                isprime =false;
            }
        }
    
    return isprime;
}
console.log(prime(2));