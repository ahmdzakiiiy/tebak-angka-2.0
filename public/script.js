const showModal = document.getElementById('showModal');
const modal = document.getElementById('modal');
const main = document.getElementById('main');

showModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
    main.classList.add('invisible');
})


// Game Rules

const player = document.getElementById('input');

let cpu = Math.round(Math.random() * 10);

let alert = document.getElementById('alert');

let result = ''

for (let chance = 3; chance >= 1; chance--) {
    if (player == cpu) {
        hasil = "WIN";

        break;
    } else if (player != cpu && chance > 1) {
        if (player > cpu) {
            alert = `TERLALU BESAR \nMasih ada ${chance - 1} kesempatan lagi`;

        } else if (player < cpu) {
            alert = `TERLALU RENDAH \nMasih ada ${chance - 1} kesempatan lagi`;

        }
    }
}

console.log(player);

