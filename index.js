// Code your solutions in this file

function writeCards(names, event) {
    let card = []
    for (let i = 0; i < names.length; i++) {
        card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return card;
}



// function countDown(){
//     let countDown = 10
// while (countDown > 0) {
//   console.log(countDown -= 1);
// }

// console.log(countDown -= 1);

// }

function countDown(start){

    while (start > 0) {
      console.log(start);
      start -= 1
    }

    console.log(start);

    }


// writeCards(names);

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);
