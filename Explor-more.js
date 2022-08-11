const country ='Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class:11, name:'Hridoy'};
const friends = [13, 14, 11, 17, 18, 20];

function add(num1, num2){
     return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
//check array using array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

//---------------------
console.log(friends.includes(11));
