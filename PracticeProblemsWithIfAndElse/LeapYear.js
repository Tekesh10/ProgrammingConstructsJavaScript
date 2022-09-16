let year1 = 2020;
let year2 = 2022;

if(year1 % 400 == 0 || (year1 % 100 != 0 && year1 % 4 == 0))
    console.log(year1+" Is a Leap Year");
else
    console.log(year1+" Is not a Leap Year");

if(year2 % 400 == 0 || (year2 % 100 != 0 && year2 % 4 == 0))
    console.log(year2+" Is a Leap Year");
else
    console.log(year2+" Is not a Leap Year");