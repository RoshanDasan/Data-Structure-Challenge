// selecting an element and swap to currect position.


function sort(arr)
{
    for(i=0; i<arr.length; i++)
    {
      let arrayLength = arr.length - i - 1
      let max = maxElement(arr, arrayLength)

      swap(arr, max, arrayLength)
    }
}

function maxElement(array,length)
{
    let max = 0
    for (let i = 0; i < length; i++) {
      if(array[max] < array[i])
      {
        max = array[i]
      }
        
    }
    return max
}

function swap(arr, max, arrayLength)
{
    let temp = arr[max]
    arr[max] = arr[arrayLength]
    arr[arrayLength] = temp
}

let array = [5,4,3,2,1]

sort(array)

console.log(array);