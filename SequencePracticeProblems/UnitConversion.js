console.log("a. inch to feet conversion");
let feetToInch = 12;
let inch = 42;   
let feet = inch / feetToInch;
console.log("42 inch = "+feet+" feet");
console.log("--------------------------------------------------------------------------");

console.log("b. square feet to square meter conversion");
let lenghtInFeet = 60;
let widthInFeet = 40;
let plotAreaInFeet = lenghtInFeet * widthInFeet;
console.log("Length and Width of plot is "+lenghtInFeet+" feet and "+widthInFeet+" feet");
console.log("Area of plot is "+plotAreaInFeet+" square feet");
let squareFeetToSquareMeter = 1/10.764;
let plotAreaInMeter = plotAreaInFeet * squareFeetToSquareMeter;
console.log("Area of plot is "+plotAreaInMeter+" square meter");
console.log("--------------------------------------------------------------------------");

console.log("c. plot conversion to acres");
let numberOfPlots = 25;
let squareMeterToAcre = 1/4047;
let areaInAcres = plotAreaInMeter * squareMeterToAcre;
console.log("Area of plot is "+areaInAcres+" acres");
let totalAreaInAcres = numberOfPlots * areaInAcres;
console.log("Area of "+numberOfPlots+" such plots is "+totalAreaInAcres+" acres");