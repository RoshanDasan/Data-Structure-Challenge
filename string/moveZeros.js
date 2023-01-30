
var moveZeroes = function(nums) {
    let i = 0

    while(i<nums.length)
    {
    let ii = i

        if(nums[i]==0)
        {
            for(let j = ii+1; j< nums.length;j++)
            {
                a[j]=a[i]
                ii++
            }
        }
        i++
    }

    

};