const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const cards = document.querySelectorAll(".card");

let currentCard = 0;

const updateCard = () => {

    cards.forEach((card, index) => {

        if(index === currentCard){
            card.style.display = "flex";
        }
        else {
            card.style.display = "none";
        }
    })
}

btnPrev.addEventListener("click", () => {
    currentCard++;
    if (currentCard >= cards.length) {
        currentCard = 0;
    }
    updateCard();
    console.log("prev");
});

btnNext.addEventListener("click", () => {
    currentCard--;
    if (currentCard < 0) {
        currentCard = cards.length - 1;
    }
    updateCard();
    console.log("next");
});