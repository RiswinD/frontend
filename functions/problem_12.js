//Write a function that takes a string and returns how many words are in it.
function countword(str)
{
    let count =0;
    for (let i=0;i<str.length;i++)
    {
        if(str[i] >=65 && str[i] <=90 || str[i] >=97 && str[i] <=122)
        {
            count++;
        }
    }
    return count;
}
console.log(countword("riswin"));