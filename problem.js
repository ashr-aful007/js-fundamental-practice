//1.full fill a two condision use && and . fill one condison is ok write || for condison also
// if(12>11 && 45>20){
//      console.log('hello hi')
// }
// if(12<10 || 40>20){
//      console.log('one condison work')
// }

//2.//write a code for one condison will true do somethig or not true print some thing
// if(45<12){
//      console.log('this condison is true')
// }
// else{
//      console.log('this condison is not true')
// }

//3.write a code for 0-19 access oddnumber use while loop
// let i = 0;
// while(i<19){
//      console.log(i)
//      i+= 2;
// }

//4.write a arry and access all items. and change 4th item. an add 2 items in arry. and cut iitems.
// let friendsName = ['rafi', 'hridoy', 'korim', 'hossin', 'zilany', 'abdulla', 'khalik'];

// for(let i = 0; i<friendsName.length; i++){
//      let allName = friendsName[i]
//      // console.log(allName)
// }
// //4th items change
// let element = friendsName[4] = 'kahotibulla'
// let addtwoAndCutOne = friendsName.splice( 5, 6, 'Ashraful islam')

// console.log(friendsName);

//5.show all arry items use for loop or for of loop

// let myFriend = ['ropick','shopick', 'jobbor', 'allia', 'kalia'];
// for(let i = 0; i<myFriend.length; i++){
//      let element =  myFriend[i];
//      console.log(element)
// }

//6.write a code for number 80 up console.log 80 up world and show
//  let number = [40, 10, 70, 80, 90, 45, 80, 90, 100, 81];

// function findNumber(number){
//      let findValue = [80] 
//      for(let i = 0; i<number.length; i++){
//           let element = number[i];
//           if(findValue <element){
//                console.log(element);
//           }
//      }
// }

// let arrInput = findNumber(number);

//7.write a code for three number multification
// function multiFuc(num1, num2, num3){
//      let totalResult = num1 * num2 * num3;
//      console.log(totalResult)
// }

// let giveenValue = multiFuc(50, 10, 25)

//8.write an object with 3 property and 3 vlaue and change 1 property value
let schoolFunction = {
     class: 10,
     age:16,
     id: 1254,
     name: 'korim',

}

schoolFunction.class = '10'
console.log(changeValue);