function reverseString(text){
     let  reversed = '';
     for(let i = text.length-1; i>= 0; i--){
          const element =text[i];
          reversed = reversed + element;
          console.log(element, reversed);
     }
     // return reversed;
}

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversd output:', reversed)

//word reverse 
function reverseWords(str){
     const words = str.split(' ');
     const result = [];
     for(let i= words.length-1; i>=0; i--){
          const element = words[i];
        result.push(element) 
     }
     const reversd = result.join(' ');
     return reversd;

}
const myString = 'I am a good boy';
const reverseWord = reverseWords(myString);
console.log(reverseWord)