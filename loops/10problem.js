//Find the factorial of a number using a loop. (5! = 5×4×3×2×1 = 120)
let n=5;
let fact =1;
for(let i=5;i>=1;i--)
{
    fact *=i;
}

console.log(fact);