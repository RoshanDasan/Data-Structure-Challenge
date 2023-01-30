// quick sort using recursion

function sort(arr, start, end)
{
    console.log(arr);
    if (start >= end) {
        return
    }

    let s = start
    let e = end
    let mid = (start+end)/2
    let pivot = arr[mid]

    while(s<=e)
    {
        while(arr[s]<pivot)
        {
            s++
        }
        while(arr[e]>pivot)
        {
            e--
        }

        if(s<=e)
        {
            let temp = s
            s = e
            e = temp

            s++
            e--
        }
    }

    sort(arr,start,e)
    sort(arr,s,end)

}


let arr = [6,5,4,3,2,1]

sort(arr, 0, arr.length-1)

console.log(arr);