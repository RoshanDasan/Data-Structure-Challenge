//  find if the array is sorted or not and return a boolean

//without recursion

function isSorted(arr,length)
{
    let index = 1
    let i = 0
    while(length > index)
    {
            
        if(arr[i] < arr[i+1])
        {
            index ++
            i++
        }
        else
        {
            return false
        }
    }

    return true
}

let arr = [1,2,3,4,5,6]

console.log(isSorted(arr,arr.length));



// with recursion

function isSorted1(arr, index)
{
   
        if(index == arr.length-1)
        {
            return true
        }

        return arr[index]<arr[index+1] && isSorted1(arr, index+1)
  

}

console.log(isSorted1(arr,0));




