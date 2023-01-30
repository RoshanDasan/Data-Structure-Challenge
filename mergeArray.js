const { count } = require("console");

function mergeArray(arr1,arr2)
{
    let length = arr1.length + arr2.length

    let count = 0
    for(let i=0;i<length;i++)
    {
        if(!arr1[i])
        {
            arr1[i]=arr2[count]
            count++

        }
    }
    console.log(arr1);
    

}



let arr1 = [1,2,3]

let arr2 = [4,5,6]

mergeArray(arr1,arr2)