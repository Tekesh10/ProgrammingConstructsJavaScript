let number = 89;
let flag = 0;
for(let i=2;i<=number/2;i++)
{
    if(number%i==0)
        flag = 1;
}
if(flag==0)
    console.log(number+" is a Prime Number");
else
    console.log(number+" is not a Prime Number");