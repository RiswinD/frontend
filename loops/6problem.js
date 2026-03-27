//Find all numbers between 1 and 100 that are divisible by both 3 and 5. Print them.
for(let i=1;i<=100;i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log(i);
    }
}