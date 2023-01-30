// take a number 
// if the number is even divide that by 2
// if the number is odd subtract that with -1
// do this until the number is 0 and count the steps

function main(number)
{
    
   return helpers(number, 0)
}

function helpers(number, count)
{
    if (number == 0)
    {
        return count
    }
    if (number % 2 == 0)
    {
      return helpers(number / 2, count +1)
    }
    return helpers(number - 1, count +1)
  
}


let ans = main(88)
console.log(ans);
    