
function isPlaindrome(word)
{
    
   let a = word.replace(/[^A-Z0-9]+/gi,"").toUpperCase()

    for(i=0,j=a.length-1;i<j;i++,j--)
    {
        if(a[i]!=a[j])
        {
            return false
        }
    }

    return true


}

isPlaindrome("A man, a plan, a canal: Panama")