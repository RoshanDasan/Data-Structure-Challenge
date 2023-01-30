var arr = [0,0,1,1,1,1,2,3,3]
let ans = removeMostDuplicate(arr)
console.log(ans);


function removeDuplicates(arr) {
    let count = 0
    
    let len = arr.length
    for(let i =0; i<arr.length;i++)
    {
      if(i< arr.length -1 && arr[i]==arr[i+1])
      {
        continue;
      }
      arr[count] = arr[i]
      count ++
    }
    
    return count

}


function removeMostDuplicate(arr)
{
    let count = 0
    for(let i = 0; i< arr.length; i++)
    {
        if(arr[i]!=arr[i+2])
        {
            arr[count]=arr[i]
            count++
        }
    }
    return count
}