const lyrics = 'tumi bondhu kala pakhai ami jeno ki. bosonto kale tomai bolte pari ni.';

// const doesExist = lyrics.includes('pakhai');
const searchString ='paKhai';
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase =lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist =lyricsLowerCase.includes(searchStringLower);

const doesExistOnline =lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);
console.log(doesExistOnline);
//-------------------------------------
//indexof 
// console.log(lyrics.indexOf('kailla'));

//indexOf condison
if(lyrics.indexOf('tumi') !== -1){
     console.log('exists inside the string')
}
else{
     console.log('cannot find it');
}
console.log(lyrics.startsWith('2umi'))

//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')