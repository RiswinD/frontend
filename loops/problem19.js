//Find the largest digit in a number.
let largest =0;
let n = 1683;
while (n>1)
{
    let h =n %10;
    if (h > largest)
    {
        largest =h;
    }
    n =Math.floor(n/10);
}
console.log(largest);