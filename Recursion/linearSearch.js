
// find target return true or false

function isExist(arr, target, index)
{

    if(index > arr.length)
    {
        return false
    }

    if(arr[index]==target)
    {
        return true
    }
    else
    {
        return isExist(arr, target, index+1)
    }
}

let arr = [1,2,3,4,5,6,7]

console.log(isExist(arr,5,0));





// find target and return index value


function isExist1(arr, target, index)
{

    if(index > arr.length)
    {
        return 
    }

    if(arr[index]==target)
    {
        return index
    }
    else
    {
        return isExist1(arr, target, index+1)
    }
}



console.log(isExist1(arr,5,0));


