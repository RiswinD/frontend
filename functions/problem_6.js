//Write a function that takes an array of numbers and returns the largest number.
function largest(arr)
{
    let large =arr[0];
   for (let i=0;i<arr.length;i++)
    {
        if (arr[i] > large)
        {
            large =arr[i];
        }
        
    } 
    return large;
}
let arr = [2,4,6,4,7,5];
console.log(largest(arr));