
// Game Started

const showModal = document.getElementById('showModal');
const modal = document.getElementById('modal');
const main = document.getElementById('main');
const game = document.getElementById('game');

showModal.addEventListener('click', () => {
    game.classList.remove('hidden');
    main.classList.add('invisible');
})



// Game Rules

let chance = 3;
let result;

btn.addEventListener('click', function() {
    play();
});
let number = Math.floor(Math.random() * 10);
let inputNumber = document.getElementById('input').value;
let message = document.getElementById('message');

function play() {

   
        
    if (inputNumber == number) {
        message.innerHTML = "Congratulations! You guessed the correct number.";
        result = 'WIN';

    } else if (inputNumber != number && chance > 0) {
        
        chance--;

         if (inputNumber > number) {
            message.innerHTML = `TERLALU BESAR! \n Kamu punya ${chance} Kesempatan lagi.`;

        } else if (inputNumber < number) {
            message.innerHTML =  `TERLALU RENDAH! \n Kamu punya ${chance} Kesempatan lagi.`;

        }
        
    } else if (inputNumber != number && chance == 0) {
        result = 'LOSE'
        message.innerHTML = "Sorry, you have reached the maximum attempts! Try again. \n Jawaban yang benar adalah " + number;
        
    } else {
        message.textContent = 'ITU BUKAN ANGKA';
    }

    console.log(chance);
    console.log(inputNumber);
    console.log(number);
}
    





























// const btn = document.getElementById('btn');
// let message = document.getElementById('message');
// let userInput = document.getElementById('input').value;
// let player = parseInt(userInput);
// let cpu = Math.ceil(Math.random() * 10);
// let chance = 3;
// message.textContent = chance;


// // Game Rules

// for (chance = 3; chance > 0; chance--) {

//     if (player != cpu && chance >1) {
//         if (player > cpu) {
//             message.textContent = `TERLALU BESAR!`;

//         } else if (player < cpu) {
//             message.textContent = `TERLALU RENDAH! \nMasih ada ${chance - 1} kesempatan lagi`;
//         }   
//     } else if (player != cpu && chance == 1) {
//         result = lose;
        
//     } else if (player == cpu) {
//         result = won;

//     } else {
//         message.textContent = "ITU BUKAN ANGKA!"
//     }

//     chance--;
// }






// Game Rules

// let result = '';

// while (chance > 0) {

//     if (player != cpu && chance > 1) {
//         if (player > cpu) {
//             message.textContent = `TERLALU BESAR \nMasih ada ${chance - 1} kesempatan lagi`;

//         } else if (player < cpu) {
//             message.textContent = `TERLALU RENDAH \nMasih ada ${chance - 1} kesempatan lagi`;

//         } else {
//             message.textContent = `ITU BUKAN ANGKA!`;
//         }


//     } else if (player != cpu && chance == 1) {
//         result = "LOSE";
//         message.textContent = `ANDA KALAH \n Jawaban yang benar adalah ${cpu}`
//         break;

//     } else if (player == cpu) {
//         result = "WON";
//         message.textContent = "ANDA MENANG";
//         break;

//     }
//     chance--;
// }





