
// function shopingHighP(shoppingCart){
//      let highShopingValue = shoppingCart[0];
//      for(let i = 0; i <shoppingCart.length; i++){
//          let highShoping = shoppingCart[i]; 
//          if(highShopingValue.price < highShoping.price){
//           highShopingValue = highShoping;
//          }
//      }
//      return highShopingValue;

// }

// const mySelection = shopingHighP(shoppingCart);
// console.log(mySelection);
// function sumForTotal(shoppingCart){
//      let sum = 0;
//      for(let i=0; i <shoppingCart.length; i++){          
//           const sumDecliaration = shoppingCart[i];
//           const productPrice = sumDecliaration.price * sumDecliaration.quantity
//            sum = sum + productPrice;         
//      }
//      return sum;
// }

const shoppingCart = [
     {name:'shoe', price: 1200, quantity:2},
     {name:'shirt', price: 2200, quantity:5},
     {name:'pant', price: 3700, quantity:4},
     {name:'belt', price: 800, quantity:3},
];

function sumAndQuantity(products){
     let sum =0;
     for(let i=0; i <products.length; i++){
          let productPrice = products[i];
          const totalQuantity = productPrice.price * productPrice.quantity;
          sum = sum + totalQuantity;
          
     }
     return sum;
}


const mayTOtalSum = sumAndQuantity(shoppingCart);
console.log(mayTOtalSum);