/**
 * 1/chair ---> 3 cft
 * 2/ table --> 10 cft
 * 3/ bed --> 50 cft
 * 4/ 
 * vary: quantity
 */
function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
     const perchirWood = 3;
     const perTableWood = 10;
     const perBedWood = 50;

     const chairWood = chairQuantity * perchirWood;
     const tableWood = tableQuantity * perTableWood;
     const bedWood = bedQuantity * perBedWood;

     // console.log(chairQuantity, tableQuantity, bedQuantity);
     const totalWood = chairWood + tableWood + bedWood;
     return totalWood;
}

const totalWood = woodCalculate(5, 4, 1);
console.log('total wood required:', totalWood);