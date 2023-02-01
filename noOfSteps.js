let numberOfSteps=(num,count)=>{

    if(num==0){
        return count/2;
    }
    else if(num%2==0){
        count=count+1;
       return numberOfSteps(num/2,count+1);
    }
    else{
       count= count+1;
     return numberOfSteps(num-1,count+1);
    }

}

console.log(numberOfSteps(14,0));