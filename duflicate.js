const names = ['abdul', 'babul', 'chabu', 'ebul', 'babul', 'abul', 'abul', 'babul', 'abul',  'abul' ];

//function for remove duflicate
function removeDuflicate(names){
     const unique = [];
     for(let i=0; i <names.length; i++){
          const name =names[i];
          if(unique.includes(name)=== false){
               unique.push(name);
          }
     }
     return unique;
}
const givenName = removeDuflicate(names);
console.log(givenName);