// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }
// add(45, 25);

//without return
// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
    // console.log(sum);
// }
// add(45, 25);
// var total = add(80, 20);
// console.log('total', total);
// function bringSingara(money){
//     var singraPrice = 10;
//     var quantity = money / singraPrice;
//     return quantity;
// } 
// var myTaka = 400;
// var singars = bringSingara(myTaka);
// console.log('Eating singaras:', singars);

//avarage assignment number
function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage;
}
const assignment1 = 59;
const assignment2 = 54;
const assignment3 = 56;

var myAverage = getAverage(assignment1, assignment2, assignment3);
console.log('my average so far:', myAverage);