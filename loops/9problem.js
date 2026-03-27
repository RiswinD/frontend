//Reverse a string manually using a loop. No .reverse() method.
let string ='abc';
let reverse ='';
for(let i=string.length-1;i>=0;i--)
{
    reverse += string[i];
}
console.log(reverse);