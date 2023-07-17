const carousel = document.getElementById("carousel");
// const leftBtn = document.getElementById("left-btn");
// const rightBtn = document.getElementById("right-btn");



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//creo un ciclo for, prendo l'indice dell'oggetto dell'array e infine con una condizione assegno l'active sempre all'indice 0 aggiungendo all'html le parole chiavi con annesse proprietà
for (let i = 0; i < images.length; i++) {
    const currImage = images[i];
    console.log(currImage);
    imageClass = "";

    if (i === 0) {
        imageClass = "active"
    }
    carousel.innerHTML += `<div class="image-container ${imageClass}"><img src="${currImage.image}" alt="" class="images"><div class="text-container"><h3>${currImage.title}</h3> <br> ${currImage.text}</div>`;


}
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
let currentImageIndex = 0;

rightBtn.addEventListener("click", function () {
    console.log("right");

    //seleziono gli elementi che hanno la stessa classe e le salvo in una const
    const imageElement = document.querySelectorAll(".image-container");

    //qui vado a rimuovere l'active, in modo tale che all'addeventlistener cliccando va a rimuovere l'active all'indice 0
    imageElement[currentImageIndex].classList.remove("active");

    // contatore dell'indice degli elementi
    currentImageIndex++;

    if (images > imageElement.length - 1) {
        currentImageIndex = 0;
    }

    // Siccome ora currentImageIndex ha un numero diverso da prima, lo uso per assegnare la classe active
    imageElement[currentImageIndex].classList.add("active");


});


leftBtn.addEventListener("click", function () {


    const imageElement = document.querySelectorAll(".image-container");


    imageElement[currentImageIndex].classList.remove("active");

    //contatore che va ridotto 
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = imageElement.length - 1;
    }

    imageElement[currentImageIndex].classList.add("active");
});

