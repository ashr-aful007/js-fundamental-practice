// const result = Math.pow(3, 8);
// console.log(result);


//abs function use for - case
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if(gap < 5){
     console.log('you guys can be friend');
}
else{
     console.log('you guys stay apart');
}

//use math round its convert to dicemal number to integer number
const number = 2.45129;
const fullNumber = Math.round(number);
// console.log(fullNumber)

//ceil its mean incress number to up
const result1 = Math.ceil(2.00001);

//its mean it decress the number to down
const result2 = Math.floor(456.259)
// console.log(result1, result2)

//Random it's work for janerate random number
// console.log(Math.random()*100);
for(let i= 0; i <=20; i++){
     const random = Math.round(Math.random()*6);
     console.log(random);
}