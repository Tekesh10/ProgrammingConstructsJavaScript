let number = 10;
let num = 0;
let flag = 0;
let i = 0;
while(flag==0 && i<=number)
{
    num = Math.pow(2, i);
    i++;
    console.log(num);
    if(num>=256){
        flag = 1;
        console.log("limit 256 is reached");
    }
}