// 1.redian to Degree converter 
function radianToDegree(radian){
     //validation
     if(typeof radian !== 'number'){
          return 'please enter valid number'
     }
     //redian to Degree convert
     let degree = radian * (180 / Math.PI);
     let result  = degree.toFixed(2)
     return result;
}

let givePramitar = radianToDegree(30);
// console.log(givePramitar);


//2.check js file or not if its javascript file return true.
function isJavaScriptFile(String){
     //validation for case number and string
     if(typeof String !== 'string'){
          return 'please enter valid file name!'
     }
    //validation lowerCase and value store *string.
   let string = String.toLowerCase();
   //chack .js Extension  exist or not.
   let checkString = String.includes('.js');
   if(checkString == true){
     return true;
   }
   else{
     return false;
   }
}

let checkValue = isJavaScriptFile('hello.js');
// console.log(checkValue);


//3.calculation oil price
function oilPrice(diesel, petrol, octane){
     //validation for case
     if(typeof diesel == 'string' || typeof petrol == 'string' || typeof octane == 'string' ){
          return 'please enter valid quantity'
     }
     // given data per litter price
     const perLitterDieselPrice = 114;
     const perLitterPetrolPrice = 135;
     const perLitterOctanePrice = 130;
     //multiply quantity and price
     let dieselPrice = diesel * perLitterDieselPrice;
     let petrolPrice = petrol * perLitterPetrolPrice;
     let octanePrice = octane * perLitterOctanePrice;
     let totlalOilprice = dieselPrice + petrolPrice + octanePrice;
     return totlalOilprice;
}

let contity = oilPrice(1, 1, 1);
// console.log(contity);

//4.cal publice bus fare total cost
function publicBusFare(candidate){
     //validation
     if(candidate == 'string'){
          return 'please enter valid number'
     }
     const busCapasity = 50;
     const microBusCapasity = 11;
     const publicBusFarePrice = 250;
    //cal publicBus fare
     let reminder = candidate % busCapasity;
     let reservedCandidate = reminder % microBusCapasity;
     let totalpublicBusFare = reservedCandidate * publicBusFarePrice;
     return totalpublicBusFare;

}

let candidatenumber = publicBusFare(235);
// console.log(candidatenumber)



//5.write a function for bestfriend or not
function isBestFriend(FirstObject, secondObject){
     //validation case
     if(FirstObject == 'number' ||  secondObject == 'number'){
          return 'plase enter valid name'
     }
     //find same name in different key and compare. 
     let findSameName = FirstObject.name.includes('Tom');
     let findFriendName = secondObject.friend.includes('Tom'); 
     
     if(findSameName == findFriendName){
          return true;
     }
     else{
          return false;
     } 


}
const FirstObject = {name:'Tom', friend:'Rock'};     
const secondObject ={name:'Rock', friend: 'Tom'};

let isBestFriendOrNot = isBestFriend(FirstObject, secondObject);
// console.log(isBestFriendOrNot);

