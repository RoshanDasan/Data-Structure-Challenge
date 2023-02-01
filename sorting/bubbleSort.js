
bubbleSort = (a) =>
{
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length-i; j++) {

            if (a[j]>a[j+1]) {
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                
            }
            
        }
        
    }

    return a

}


let arr = [3,2,5,1,6,4]
console.log(bubbleSort(arr));