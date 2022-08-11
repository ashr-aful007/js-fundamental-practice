let first = 5;
let second = 7;
// console.log(first, second);
//it's dosen't work for sawaping
// first = second;
// second = first;

//we will use --tem --its work for sawaping value one to another
//approach: 1
const tem = first;
first = second;
second = tem;
console.log(first, second);

//approch:2 Desturcturing
[first, second] = [second, first]
console.log(first, second)