//Print all prime numbers between 1 and 50.
let n =50;
for(let i=2;i<=n;i++)
{
    let isprime = true;
    for(let j=2;j<i;j++)
    {
        if(i % j === 0)

            {
                isprime = false;
                break;
            }
    }
    if(isprime)
    {
        console.log(i);
    }
}