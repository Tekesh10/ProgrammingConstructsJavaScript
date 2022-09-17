let head = 0;
let bets = 0;
let maximum = 200;
let minimum = 0;
let money = 100;
while( money < maximum && money > minimum)
{
    let random = Math.floor(Math.random() * 2);
    bets++;
    if(random == 0){
        money++;
        head++;
    }
    else{
        money--;
    }
}
console.log("Number of times won -> "+head+"\nNumber of bets -> "+bets);