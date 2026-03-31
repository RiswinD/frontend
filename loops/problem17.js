//Check if a number is a palindrome.
let n = 123;
let b =n.toString();
let convert ='';
while (n>=1)
{
    let h = n%10;
    convert += h;
    n =Math.floor(n/10);
}
if (convert === b)
{
    console.log("this is palindrome");
}
else
{
    console.log("this is not a palindrome");
}
