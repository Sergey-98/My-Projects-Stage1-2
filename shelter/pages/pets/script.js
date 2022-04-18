`use strict`;
import petsInfo from '../../js/pets.js';

let pets = document.querySelector('.pets');

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

  // --------Card-------
class Card {
    constructor(src, alt, name, data) {
        this.src = src;
        this.alt = alt;
        this.name = name;
        this.data = data;
        this.parent = document.querySelector('.pets');
    }
    renderCard() {
        const card = document.createElement('div');
        card.classList.add('pets-card');
        card.setAttribute('data-pets', this.data);
        card.innerHTML = `
        <img src = ${this.src} alt = ${this.alt} class = "card-img" data-pets=${this.data}>
        <h4 class = "card-title" data-pets=${this.data}>
            ${this.name}
        </h4>
        <button class = "card-button" data-pets=${this.data}> 
            Learn more
        </button> 
        `;
        this.parent.append(card);
    }
}

for (let i = 0; i < petsInfo.length; i++) {
    new Card(
            petsInfo[i].img,
            petsInfo[i].alt,
            petsInfo[i].name,
            petsInfo[i].name,
        ).renderCard();
}
const data = document.querySelectorAll('[data-pets]');
//   ------Modal------
class Modal {
    constructor(name, src, alt, type, breed, description, age, inoculations, diseases, parasites) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }

    renderModal() {
        let modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
                    <img src = ${this.src} class = "modal-photo" alt = ${this.alt}>
                    <div class ="content-description">
                        <div class = "desc-header">
                            <h3 class = "description-name">
                                ${this.name}
                            </h3>
                            <h4 class = "description-second-name">
                                ${this.type} - ${this.breed}
                            </h4>
                        </div>
                        <h5 class = "mod-desc">
                            ${this.description}
                        </h5>
                        <ul class = "description-info">
                            <li class = "info">
                                <b class = "bold">Age:</b> <span class = "age">${this.age}</span>
                            </li>
                            <li class = "info">
                                <b class = "bold">Inoculations:</b> <span class = "inoculations">${this.inoculations}</span>
                            </li>
                            <li class = "info">
                                <b class = "bold">Diseases:</b> <span class = "diseases">${this.diseases}</span>
                            </li>
                            <li class = "info">
                                <b class = "bold">Parasites:</b> <span class = "parasites">${this.parasites}</span>
                            </li>
                        </ul>
                    </div>
        `;
    }
}

let modalWrapper = document.querySelector('.modal-wrapper');
let modalContent = document.querySelector('.modal-content');
let modalClose = document.querySelector('.modal-close');

function closeModal() {
        modalWrapper.classList.add('none');
        modalContent.innerHTML = ``;
}
modalWrapper.addEventListener('click', (event)=> {
    if (event.target.classList.contains('modal-wrapper') || event.target.classList.contains('modal-close') || event.target.classList.contains('modal')) { 
        closeModal();
    }
});

function showModal(event) {
    modalWrapper.classList.remove('none');
    const tar = event.target;
    for (let i = 0; i < petsInfo.length; i++) {
        if (petsInfo[i].name === tar.dataset.pets) {
            new Modal(
                petsInfo[i].name,
                petsInfo[i].img,
                petsInfo[i].alt,
                petsInfo[i].type,
                petsInfo[i].breed,
                petsInfo[i].description,
                petsInfo[i].age,
                petsInfo[i].inoculations,
                petsInfo[i].diseases,
                petsInfo[i].parasites,
            ).renderModal();
        }
    }
}
data.forEach((el) => el.addEventListener('click', (event) => showModal(event)));