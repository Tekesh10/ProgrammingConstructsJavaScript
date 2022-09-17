let option = 1; //1.Feet to Inch   2.Inch to Feet   3.Meter to Feet   4.Feet to Meter
var number = 48;
switch(option)
{
    case 1:
        let inch = number*12;
        console.log(number+" feet = "+inch+" inch(s)");
        break;
    case 2:
        let feet = number/12;
        console.log(number+" inch(s) = "+feet+" feet");
        break;
    case 3:
        let feet1 = number*3.28084;
        console.log(number+" meter = "+feet1+" feet");
        break;
    case 4:
        let meter = number/3.28084;
        console.log(number+" feet = "+meter+" meter");
        break;
    default:
        console.log("Choose option Correctly")
        break;
}