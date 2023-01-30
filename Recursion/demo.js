function remove(nums, val) {
    let arr = 0
    let len = nums.length
    
    for(let i =0; i<len; i++)
    {
        if(nums[i] != val)
        {
            nums[arr++] = nums[i]
                      
        }
               
    }
    
    return arr    
    
};

let nums = [3,2,2,3,4,3,6,7,2,3]

let val = 3

let ans = remove(nums, val)
console.log(ans,'ans');