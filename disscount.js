// function ticketPrice(ticketQuantity){
//      let first100Price = 100;
//      let secend100Price = 90;
//      let restTecketPrice = 70;
//      if(ticketQuantity <= 100){
//        let ticketPrice100 =  ticketQuantity * first100Price;
//       return ticketPrice100;

//      }
//      else if(ticketQuantity <= 200){
//           const first100Rate = 100 * first100Price;
//           const restTicketquantity = ticketQuantity - 100;
//           const restTicketPrice = restTicketquantity * secend100Price;
//           const totalprice = first100Rate + restTicketPrice
//           return totalprice;
//      }
//      else{
//           const first100Rate = 100 * first100Price;
//           const secend100Rate = 100 * secend100Price;
//           const restTicketquantity = ticketQuantity - 200;
//           const restTicketPrice = restTicketquantity * restTecketPrice;
          
//           const totalCost = first100Rate + secend100Rate + restTicketPrice;
//           return totalCost;
//      }
// }


/// fisrt 50 ticket price par ticket 100
// 50 to 100  ticket price 90
//and 100 up to 70 taka 
// write a function for condision

// function ticketPriceClc(ticketQuantity){
//     const first50Ticket = 100;
//     const secend50Ticket = 90;
//     const anotherTicket = 70;
    
//     if(ticketQuantity <= 50){
//         let first50price = ticketQuantity * first50Ticket;
//         return first50price;          
//     }
//     else if(ticketQuantity <= 100){
//         let secend50Price = ticketQuantity * secend50Ticket;
//         let secend50Quantity = ticketQuantity - 50;
//         let secend50ticketPrice = secend50Quantity * secend50Ticket;
//         let totalPrice = secend50Price + secend50ticketPrice;
//         return totalPrice;
//     }
//     else{
//         let first50price = ticketQuantity * first50Ticket;
//         let secend50Price = ticketQuantity * secend50Ticket;
//         let otherTicketQuantity = ticketQuantity - 100 ;
//         let anotherTicketPrice = otherTicketQuantity * anotherTicket;
//         let totalCostTicket = first50price + totalPrice + anotherTicketPrice;

//         return totalCostTicket;

//     }
        
// }

// const ticketPrice = ticketPriceClc(500)
// console.log(ticketPrice);

/**
 * 1/if ticket number is less than 100, per ticket price: 100;
 * 2/if ticket nomber is more than 100, but less than 200. first 100 tickets will be 100/ticket
 * rest tickets will be 90 taka per piece
 * 3.if you purchase more than 200 tickets
 * f
 */

function ticketPrice(ticketQuantity){
     const first100Rate = 100;
     const second100Rate = 90;
     const restTicketRate = 70;
     if(ticketQuantity <= 100){
          const price = ticketQuantity * first100Rate;
          return price;
     }
     else if(ticketQuantity <= 200){
          const first100Price = 100 * second100Rate;
          const restTicketquantity = ticketQuantity - 100;
          const restTicketPrice = restTicketquantity * second100Rate;
          const totalprice = first100Price + restTicketPrice;
          return totalprice;
     }
     else{
           const first100Price = 100 * first100Rate;
           const secend100Price = 100 * second100Rate;
           const restTicketQuantity = ticketQuantity - 200;
           const restTicketPrice = restTicketQuantity * restTicketRate;
           const totalCost = first100Price + secend100Price + restTicketPrice;
           return totalCost;
     }
}

const price = ticketPrice(220);
console.log(price);
