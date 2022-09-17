function tempUnitConvert(option)
{
    switch(option)
    {
        case 1:
            let degF = (temp * 9/5) + 32;
            console.log(temp+" degC = "+degF+" degF");
            break;
        case 2:
            let degC = (temp - 32) * 5/9;
            console.log(temp+" degF = "+degC+" degC");
            break;
        default:
            console.log("Choose option Correctly")
            break;
    }
}
let option = 1; //1.C to F   2.F to C
let temp = 100;
tempUnitConvert(option);