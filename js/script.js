// 1 creo le due variabili
// nameCharacters per il titolo
// descriptionCharacters per il paragrafo
const nameCharacters = ['Barney Stinson', 
    'Ted Mosby', 
    'Robin Scherbatsky',
    'Tracy McConnell (The Mother)',
    'Lily Aldrin',
    'Marshall Eriksen'
];
const quotesCharacters =[
    'It\'s gonna be legen...wait for it...dary!',
    'The littlest thing can cause a ripple effect that changes your life.',
    'Nobody asked you, Patrice!',
    'Oh, no, no, no, no. It\'s gonna take a lot more than 20 minutes.This is gonna take everything you have got.It will take all your time, all your attention, all your resources.This is the big one, diaper man! You gotta do it right, can\'t be messing around and picking up girls in drug stores. You got work to do.',
    'Where\'s the poop?',
    'Happy Slapsgiving!'
]

//2 creo le altre variabili che mi servirano
// 2a pongo a 0 la variabile currentIndex
// 2b creo le variabili che fanno riferimento agli elementi del DOM
let currentIndex = 0;
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const buttonNext = document.getElementById('next');
const buttonBefore = document.getElementById('prev');

title.innerHTML = nameCharacters[currentIndex];
paragraph.innerHTML = quotesCharacters[currentIndex];

buttonNext.addEventListener('click', function () {
    // box.classList.remove(listaColore[currentIndex]);
    currentIndex++;
    if (currentIndex === nameCharacters.length) {
        currentIndex = 0;
    }
    title.innerHTML = nameCharacters[currentIndex];
    paragraph.innerHTML = quotesCharacters[currentIndex];
    
    

})

buttonBefore.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex === -1) {
        currentIndex = nameCharacters.length - 1;
    }
    title.innerHTML = nameCharacters[currentIndex];
    paragraph.innerHTML = quotesCharacters[currentIndex];
    

})