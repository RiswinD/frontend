//Write a function that takes a string and returns it reversed.
function stringreverse(str)
{
    let empstr ='';
    for (let i=str.length-1;i>=0;i--)
    {
        empstr +=str[i];
      
    }
    return empstr;
}
console.log(stringreverse("riswin"));