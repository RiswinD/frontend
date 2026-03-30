//Find how many times the digit 3 appears in numbers from 1 to 100.
let count =0;
for (let i=1;i<=100;i++)
{
    let str =i.toString();
    for(let j=0;j<str.length;j++)
    {
        if (str[j] === '3')
        {
            count++;
        }
        
    }
}
console.log(count);