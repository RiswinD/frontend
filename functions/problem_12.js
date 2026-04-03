//Write a function that takes a string and returns how many words are in it.
function countword(str)
{
    let count =1;
    for (let i=0;i<str.length;i++)
    {
        if(str[i] === ' ')
        {
            count++;
        }
    }
    return count;
}
console.log(countword("riswin is good name"));