//Write a function that takes two arrays and returns a new array combining both without duplicates
function newarray(arr1,arr2)
{
    let newarr =[];

    for (let i = 0; i < arr1.length; i++)
         {
             newarr.push(arr1[i]);
            }
    for (let i =0;i<arr2.length;i++)
    {
         let found =false;
        for (let j=0;j<newarr.length;j++)
        {
           
            if (arr2[i] ===newarr[j])
            {
                found = true;
                break;
            }
        }
        if(!found)
        {
            newarr.push(arr2[i]);
        }
            

        }
       return newarr; 
    }
    
    

let arr1 =[1,2,3];
let arr2 =[3,4,5];
console.log(newarray(arr1,arr2))