

// one way
var moveZeroes = function(array) {
  
    let temp

    for (let i = 0; i < array.length; i++) {
        if(array[i] == 0)
        {
            temp = array[i]
                array[j]=array[j+1]

            for(let j=i;j< array.length;j++)
            {
                array[j]=array[j+1]
                
            }
            array[array.length-1]=temp
        }
        
    }

    return array
};

console.log(moveZeroes([1,0,5,0,2,9,0,3]));

// less complexity






