
var lengthOfLastWord = function(s) {

let arr = s.split(" ")
   console.log(arr);
let len = arr.length-1

while(arr[len] == 0)
{

    arr.pop()
    len--


}
 

return arr[len].length

};


let s = "   fly me   to   the moon "



console.log(lengthOfLastWord(s));

