// get a integer value
// count the zeroes in that number


function counter(value) 
{
   return helpers(value, 0);

}

function helpers(value, count) 
{
    if(value == 0)
    {
        return count
    }
    
    let rem = Math.floor(value % 10);


    if(rem == 0)
    {
        return helpers(Math.floor(value/10), count + 1);
    }

    return helpers(Math.floor(value/10), count);

}

let c = counter(30204);

console.log(c);

 