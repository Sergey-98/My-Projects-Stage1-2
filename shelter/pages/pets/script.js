`use strict`;
 
const petsList = [
    {
        img: '../../assets/images/pets-katrine.png',
        name: 'Katrine',
    },
    {
        img: '../../assets/images/pets-jennifer.png',
        name: 'Jennifer',
    },
    {
        img: '../../assets/images/pets-woody.png',
        name: 'Woody',
    },
    {
        img: '../../assets/images/pets-sophia.png',
        name: 'Sophia',
    },
    {
        img: '../../assets/images/pets-timmy.png',
        name: 'Timmy',
    },
    {
        img: '../../assets/images/pets-charly.png',
        name: 'Charly',
    },
    {
        img: '../../assets/images/pets-scarlet.png',
        name: 'Scarlett',
    },
    {
        img: '../../assets/images/pets-freddie.png',
        name: 'Freddie',
    }

]
// let petsLength = Object.keys(petsList).length;
let pets = document.querySelector('.pets');

let helpList = document.querySelector('.help-list');

for (let i = 0; i < petsList.length; i++) {
    const petsCard = document.createElement('div');
    petsCard.classList.add('pets-card');
    pets.append(petsCard);
    const iconCard = document.createElement('img');
    iconCard.classList.add('card-icon');
    iconCard.src = petsList[i].img;
    iconCard.alt = petsList[i].name;
    petsCard.append(iconCard);
    const titleCard = document.createElement('span');
    titleCard.classList.add('card-title');
    titleCard.textContent = petsList[i].name;
    petsCard.append(titleCard);
    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.textContent = 'Learn more';
    petsCard.append(cardButton);
}


// -----------------------------------------------


const hamburger = document.querySelector('.b-hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');


let width = document.querySelector('body').offsetWidth;

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) { 
        hamburger.classList.remove('is-active');
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        if (nav.classList.contains('none')) {
            nav.classList.remove('none');
        } else {
            setTimeout(()=>{nav.classList.add('none')}, 1000);
        }
    }
}
window.addEventListener('resize',function(){
    width = document.querySelector('body').offsetWidth;
    if (width < 768) {
        nav.classList.add('none');
    } else if (width >= 768) {
        nav.classList.remove('none');
    }
});
if (width < 768) {
    nav.classList.add('none');
} else if (width >= 768) {
    nav.classList.remove('none');
}
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (nav.classList.contains('none')) {
        nav.classList.remove('none');
    } else {
        setTimeout(()=>{nav.classList.add('none')}, 1000);
    }
  });
  navLinks.forEach((el) => el.addEventListener('click', closeMenu));