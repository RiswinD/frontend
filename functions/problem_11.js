//Write a function that takes an array and returns a new array with only the even numbers.
function oldarray(arr1)
{
    let newarray =[];
    for (let i=0;i<arr1.length;i++)
    {
        if (arr1[i] % 2 == 0)
        {
            newarray.push(arr1[i]);
        }
    }
    return newarray;
}
let arr1 =[1,2,3,4,5,6];
console.log(oldarray(arr1));