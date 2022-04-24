`use strict`;
import petsInfo from '../../js/pets.js';

let pets = document.querySelector('.pets');

// -----------------------------------------------

const hamburger = document.querySelector('.b-hamburger');
const nav = document.querySelector('.nav');
const navWrapper = document.querySelector('.nav-wrapper');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');
let data;
let width = document.querySelector('body').offsetWidth;
let activeBurgerMemu = false;

function closeMenu() {
    hamburger.classList.remove('is-active');
    document.documentElement.classList.remove('overflow');
    nav.classList.remove('open');
    navWrapper.classList.remove('open');
    activeBurgerMemu = false;
    if (nav.classList.contains('none') && navWrapper.classList.contains('none')) {
        nav.classList.remove('none');
        navWrapper.classList.remove('none');
        activeBurgerMemu = true;
    } else {
        setTimeout(() => {
            nav.classList.add('none');
            navWrapper.classList.add('none');
        }, 1000);
        activeBurgerMemu = false;
    }
}
window.addEventListener('resize',function(){
    width = document.querySelector('body').offsetWidth;
    if (width < 768 && !nav.classList.contains('open')) {
        nav.classList.add('none');
        navWrapper.classList.add('none');
    } else if (width >= 768) {
        nav.classList.remove('none');
        navWrapper.classList.remove('none');
    }
});
if (width < 768) {
    nav.classList.add('none');
    navWrapper.classList.add('none');
} else if (width >= 768) {
    nav.classList.remove('none');
    navWrapper.classList.remove('none');
}
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    document.documentElement.classList.toggle('overflow');
    nav.classList.toggle('open');
    navWrapper.classList.toggle('open');
    if (nav.classList.contains('none') && navWrapper.classList.contains('none')) {
        nav.classList.remove('none');
        navWrapper.classList.remove('none');
        activeBurgerMemu = true;
    } else {
        setTimeout(()=>{
            nav.classList.add('none');
            navWrapper.classList.add('none');
        }, 1000);
        activeBurgerMemu = false;
    }
  });
  navLinks.forEach((el) => el.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        console.log(event.target);
        closeMenu();
    }
    }));
    navWrapper.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('nav-wrapper')) {
            closeMenu(); 
        }
    });
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

// for (let i = 0; i < petsInfo.length; i++) {
//     new Card(
//             petsInfo[i].img,
//             petsInfo[i].alt,
//             petsInfo[i].name,
//             petsInfo[i].name,
//         ).renderCard();
// }
// let data = document.querySelectorAll('[data-pets]');

//------------Pagination-----------------

// let width = document.querySelector('body').offsetWidth;
let start = document.querySelector('.button-double-left');
let end = document.querySelector('.button-double-right');
let prev = document.querySelector('.button-left');
let next = document.querySelector('.button-right');
let pagination = document.querySelector('.pets');
let numPage = document.querySelector('.button-number');
let count = 1;
let limit;
let petsArr = [];

function generatePages() {
    petsArr = [];
    for (let i = 0; i < 6; i++) {
    for (let j = 0; j < petsInfo.length; j++) {
        petsArr.push(j);
    }
}
}
generatePages();
function sliceBlock(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}

function shuffleArr(array) {
    array.sort(() => Math.random() - 0.5);
}

window.addEventListener('resize',function(){
    width = document.querySelector('body').offsetWidth;
    generatePages();
    if (width >= 1280) {
        petsArr = sliceBlock(petsArr, 8);
    } else if (width < 1280 && width >= 768) {
        petsArr = sliceBlock(petsArr, 6);
    } else if (width < 768 && width >= 320) {
        petsArr = sliceBlock(petsArr, 3);
    }
    if (count > petsArr.length) {
        count = petsArr.length-1;
    }
    setTimeout(()=>{
        for (let i = 0; i < petsArr.length; i++) {
        shuffleArr(petsArr[i]);
        }
    }, 500);
    
    pagination.innerHTML = '';
    createPages([petsArr[count-1]]);
    controlDisabled (count, petsArr.length);
});

if (width >= 1280) {
    petsArr = sliceBlock(petsArr, 8);
} else if (width < 1280 && width >= 768) {
    petsArr = sliceBlock(petsArr, 6);
} else if (width < 768 && width >= 320) {
    petsArr = sliceBlock(petsArr, 3);
}

for (let i = 0; i < petsArr.length; i++) {
    shuffleArr(petsArr[i]);
}
createPages([petsArr[count-1]]);
function addDisabled(button) {
    button.disabled = true;
    button.classList.remove('active');
    button.classList.add('disabled');
}
function removeDisabled(button) {
    button.disabled = false;
    button.classList.remove('disabled');
    button.classList.add('active');
}

function controlDisabled (page, length) {
    if (page == 1) {
        addDisabled(start);
        addDisabled(prev);
        removeDisabled(end);
        removeDisabled(next);
        numPage.innerText = page;
    } else if (page > 1 && page < length) {
        removeDisabled(start);
        removeDisabled(end);
        removeDisabled(prev);
        removeDisabled(next);
        numPage.innerText = page;
    } else if (page == length) {
        removeDisabled(start);
        removeDisabled(prev);
        addDisabled(end);
        addDisabled(next);
        numPage.innerText = page;
    }
}

function createPages(elem) {
    for (let i = 0; i < elem[0].length; i++) {
        let num = elem[0][i];
        new Card(
            petsInfo[num].img,
            petsInfo[num].alt,
            petsInfo[num].name,
            petsInfo[num].name,
        ).renderCard();
    }
    data = document.querySelectorAll('[data-pets]');
    data.forEach((el) => el.addEventListener('click', (event) => showModal(event)));
}
function showNext () {
    count += 1;
    pagination.innerHTML = '';
    createPages([petsArr[count-1]]);
    controlDisabled (count, petsArr.length);
}
function showPrev () {
    count -= 1;
    pagination.innerHTML = '';
    createPages([petsArr[count-1]]);
    controlDisabled (count, petsArr.length);
}
function showStart () {
    count = 1;
    pagination.innerHTML = '';
    createPages([petsArr[count-1]]);
    controlDisabled (count, petsArr.length);
}
function showEnd () {
    count = petsArr.length;
    pagination.innerHTML = '';
    createPages([petsArr[count-1]]);
    controlDisabled (count, petsArr.length);
}

next.addEventListener('click', (event) => {
    if (event.target.classList.contains('button-right')) {
        showNext();
    }
});
prev.addEventListener('click', (event) => {
    if (event.target.classList.contains('button-left')) { 
        showPrev();
    }
});
start.addEventListener('click', (event) => {
    if (event.target.classList.contains('button-double-left')) { 
        showStart();
    }
});
end.addEventListener('click', (event) => {
    if (event.target.classList.contains('button-double-right')) { 
        showEnd();
    }
});
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
    document.documentElement.classList.remove('overflow');
    modalWrapper.classList.add('none');
    modalContent.classList.remove('scroll');
    modalContent.innerHTML = ``;
}
modalWrapper.addEventListener('click', (event)=> {
    if (event.target.classList.contains('modal-wrapper') || event.target.classList.contains('modal-close') || event.target.classList.contains('modal')) { 
        closeModal();
    }
});

function showModal(event) {
    modalWrapper.classList.remove('none');
    document.documentElement.classList.add('overflow');
    modalContent.classList.add('scroll');
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
