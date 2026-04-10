//Write a function that takes an array of strings and returns the longest string.
function longstr(arr1)
{
    let largest=arr1[0];
    for (let i=1;i<arr1.length;i++)
    {
        if (arr1[i].length > largest.length)
        {
            largest = arr1[i];
        }
    }
    return largest;

}
let arr1 =["hello","my","name","is","riswin"];
console.log(longstr(arr1));