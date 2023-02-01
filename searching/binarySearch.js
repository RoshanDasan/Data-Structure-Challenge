

binarySearch = (arr, target) =>
{
    let start = 0
    let end = arr.length
    
    while(start<=end)
    {
        let mid = (start+end)/2


        if(arr[mid] === target)
        {
            return mid
        }

        if(arr[mid]>target)
        {
            end = mid -1
        }
        else if(arr[mid]<target)
        {
            start = mid +1
        }
        else
        {
            return -1
        }
               
    }
}

let arr = [1,2,3,4,5,6]

console.log(binarySearch(arr,5));