
// var isPowerOfTwo = function(n) {
    
//     let result=n;
//     if(result<2){
//         return false;
//         console.log(result);
//     }
//     else if(result==2){
//         console.log(result);
//         return true;
//     }
//     else
//     {
//         console.log(result);
//         isPowerOfTwo(result/2)

//     }    
// };





// let isPowerOfTwoOne=(n)=>{

    
//     if(n==2 ||n==1){
//         return true;
//     }
//     else if(n<2){
//         return false
//     }
//     else{
//         return isPowerOfTwoOne(n/2)
//     }
// }


let isPowerOfThree=(n)=>{

    
    if(n==3||n==1){
        return true;
    }
    else if(n<3){
        return false
    }
    else{
        return isPowerOfThree(n/3)
    }
}                                                                                                   




console.log(isPowerOfThree(27));













// console.log(isPowerOfTwo(21));