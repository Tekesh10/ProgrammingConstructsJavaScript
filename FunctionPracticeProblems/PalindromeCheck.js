function pelindrome(number)
{
    let rev = 0;
    let rem = 0;
    const temp = number;
    while(Math.floor(number) > 0)
    {
        rem = number%10;
        rev = rev*10 + rem;
        number -= rem;
        number /= 10;
    }
    if(rev==temp)
        console.log("Number is a pelindrome");
    else
        console.log("Number is not a pelindrome");
}
let number = 88;
pelindrome(number);