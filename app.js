// import functions and grab DOM elements
const cupButton1 = document.getElementById('button-1');
const cupButton2 = document.getElementById('button-2');
const cupButton3 = document.getElementById('button-3');

const cupImg1 = document.getElementById('cup-img-1');
const cupImg2 = document.getElementById('cup-img-2');
const cupImg3 = document.getElementById('cup-img-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');


// let state
let wins = 0;
let total = 0;

function resetImages() {
    cupImg1.src = './assets/Cupgamewrong.png';
    cupImg2.src = './assets/Cupgamewrong.png';
    cupImg3.src = './assets/Cupgamewrong.png';
}

function displayWinsLossesAndTotal() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;

}
// set event listeners
cupButton1.addEventListener('click', () => {
    resetImages();

    total++;

    const randomCupNumber = Math.floor(Math.random() * 3);

    if (randomCupNumber === 0) {
        wins++;
        cupImg1.src = './assets/correct-cup.png';
    } else if (randomCupNumber === 1) {
        cupImg2.src = './assets/correct-cup.png';
    } else {
        cupImg3.src = './assets/correct-cup.png';
    }
    displayWinsLossesAndTotal();
});
cupButton2.addEventListener('click', () => {
    resetImages();

    total++;

    const randomCupNumber = Math.floor(Math.random() * 3);

    if (randomCupNumber === 0) {
        
        cupImg1.src = './assets/correct-cup.png';
    } else if (randomCupNumber === 1) {
        cupImg2.src = './assets/correct-cup.png';
        wins++;
    } else {
        cupImg3.src = './assets/correct-cup.png';
    }
    displayWinsLossesAndTotal();
});
cupButton3.addEventListener('click', () => {
    resetImages();

    total++;

    const randomCupNumber = Math.floor(Math.random() * 3);

    if (randomCupNumber === 0) {
        
        cupImg1.src = './assets/correct-cup.png';
    } else if (randomCupNumber === 1) {
        cupImg2.src = './assets/correct-cup.png';
    } else {
        cupImg3.src = './assets/correct-cup.png';
        wins++;
    }
    displayWinsLossesAndTotal();
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
