//1.variable
var myName = 'kahan';

//math operation:+, -, *, /,
//shorthand: +=, --, *=, /=
//++, --,

//2.Array
var friends = ['abdul', 'babul', 'chabul','dabul'];

var thirdFriend = friends[2];
friends[3] = 'dambool';

//conditionals
// >, <, >=, <=, ==, ===, !=, !==

if(friends.length <2){
     console.log('fokir tor kono friend nai')
}
else if(friends.length <4){
     console.log('you have huge friend')
}
else{
     console.log('you dont have any friend')
}
//4. loop
//while
var number = 0;
while(number <= 6){
     console.log(number)
     number++;
}
//for
for(var i=0; i<=10; i++){
     console.log(i)
}

//5.function
function isMoonup(time){
    if(time > 7){
     return true;
    }
}

//6. object 

var jantus = {
     height: 60;
     romanticism: 'heavy',
     bapperTaka: 'borolox'
}