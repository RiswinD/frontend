/* Print a triangle pattern using * (5 lines: first line 1 star, last line 5 stars).
*
**
***
****
*****
*/
let n =5;
for(let i=1;i<=n;i++)
{
    let star ='';
    for(let j=1;j<=i;j++)
    {
       star += '*'; 

    }
    console.log(star);
}
