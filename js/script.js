// 1 creo le due variabili
// nameCharacters per il titolo
// descriptionCharacters per il paragrafo
const nameCharacters = [
    'Barney Stinson', 
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
];

const img = [
    'https://i.pinimg.com/originals/69/72/1d/69721ddc0809ae693aa87d53cc697e3e.jpg',
    'https://cdn.lifehack.org/wp-content/uploads/2014/09/ted-mosby.jpg',
    'https://andc-scale.livewallcampaigns.com/imageScaled/?site=andc&file=1493812365_7c3fcf3d80c24fdfcf1e9cde4e2afbe9.png&w=2000&h=2000&cropped=0',
    'https://imgix.bustle.com/rehost/2016/9/13/eed758fe-dc9b-48e1-8dc6-85e88e3e7b0a.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress',
    'https://i.pinimg.com/originals/07/35/47/0735473133ac31fd134172c9b504bae8.jpg',
    'https://pbs.twimg.com/media/EaJm_56WsAAEKEi.jpg:large'
];

//2 creo le altre variabili che mi servirano
// 2a pongo a 0 la variabile currentIndex
// 2b creo le variabili che fanno riferimento agli elementi del DOM
let currentIndex = 0;
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const buttonNext = document.getElementById('next');
const buttonBefore = document.getElementById('prev');
const imgCharacter = document.getElementById('img-character');

title.innerHTML = nameCharacters[currentIndex];
paragraph.innerHTML = quotesCharacters[currentIndex];
imgCharacter.src = img[currentIndex];

buttonNext.addEventListener('click', function () {
    // box.classList.remove(listaColore[currentIndex]);
    currentIndex++;
    if (currentIndex === nameCharacters.length) {
        currentIndex = 0;
    }
    title.innerHTML = nameCharacters[currentIndex];
    paragraph.innerHTML = quotesCharacters[currentIndex];
    imgCharacter.src = img[currentIndex];
    
    
})

buttonBefore.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex === -1) {
        currentIndex = nameCharacters.length - 1;
    }
    title.innerHTML = nameCharacters[currentIndex];
    paragraph.innerHTML = quotesCharacters[currentIndex];
    imgCharacter.src = img[currentIndex];
    

})