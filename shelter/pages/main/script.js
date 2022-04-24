`use strict`;

import petsInfo from '../../js/pets.js';

//--------------- for how help block--------------
const help = [
    {
        icon: '../../assets/icons/icon-pet-food.svg',
        title: 'Pet food',
    },
    {
        icon: '../../assets/icons/icon-transportation.svg',
        title: 'Transportation',
    },
    {
        icon: '../../assets/icons/icon-toys.svg',
        title: 'Toys',
    },
    {
        icon: '../../assets/icons/icon-bowls-and-cups.svg',
        title: 'Bowls and cups',
    },
    {
        icon: '../../assets/icons/icon-shampoos.svg',
        title: 'Shampoos',
    },
    {
        icon: '../../assets/icons/icon-vitamins.svg',
        title: 'Vitamins',
    },
    {
        icon: '../../assets/icons/icon-medicines.svg',
        title: 'Medicines',
    },
    {
        icon: '../../assets/icons/icon-collars-leashes.svg',
        title: 'Collars / leashes',
    },
    {
        icon: '../../assets/icons/icon-sleeping-area.svg',
        title: 'Sleeping areas',
    }
];
const hamburger = document.querySelector('.b-hamburger');
const nav = document.querySelector('.nav');
const navWrapper = document.querySelector('.nav-wrapper');
const navLinks = document.querySelectorAll('.nav-link');
const navList = document.querySelectorAll('.nav-list');
let width = document.querySelector('body').offsetWidth;
let helpList = document.querySelector('.help-list');
let body = document.querySelector('body');

let activeBurgerMemu = false;
//-----отключение ссылок на пункты header-------


// ---------------------------------------------

for (let i = 0; i < help.length; i++) {
    createHelpList(i);
}
// -----------------------------------------------
function createHelpList(i) {
    const helpListItem = document.createElement('li');
    helpListItem.classList.add('help-list-item');
    helpList.append(helpListItem);
    const iconItem = document.createElement('img');
    iconItem.classList.add('help-list-item-icon');
    iconItem.src = help[i].icon;
    iconItem.alt = help[i].title;
    helpListItem.append(iconItem);
    const titleItem = document.createElement('h4');
    titleItem.classList.add('help-list-item-title');
    titleItem.textContent = help[i].title;
    helpListItem.append(titleItem);
}
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
            setTimeout(()=>{
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
    constructor(src, alt, name, data, classAdd, classRemove) {
        this.src = src;
        this.alt = alt;
        this.name = name;
        this.data = data;
        this.classAdd = classAdd;
        this.classRemove = classRemove;
        this.parent = document.querySelector('.slider');
    }
    renderCard() {
        const card = document.createElement('div');
        card.classList.remove(this.classRemove);
        card.classList.add(this.classAdd);
        card.classList.add('card');
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

for (let i = 0; i < petsInfo.length-5; i++) {
    new Card(
            petsInfo[i].img,
            petsInfo[i].alt,
            petsInfo[i].name,
            petsInfo[i].name,
        ).renderCard();
}
let data = document.querySelectorAll('[data-pets]');
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
let modal = document.querySelector('.modal');
// let body = document.querySelector('body');

function closeModal() {
    document.documentElement.classList.remove('overflow');
    modalContent.classList.remove('scroll');
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
    document.documentElement.classList.add('overflow');
    modalContent.classList.add('scroll');
    const tar = event.target;
    // console.log(tar);
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

// ---------Slider---------

let petsArr = [];
let card = document.querySelector('.card');

for (let i = 0; i < petsInfo.length; i++) {
    petsArr.push(i);
}
let arr = petsArr;
petsArr = petsArr.concat(petsArr);
petsArr = petsArr.concat(arr);
function sliceBlock(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}
petsArr = sliceBlock(petsArr, 3);
// console.log(petsArr);

let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');
let slider = document.querySelector('.slider');
let countSlider = 0;

function createCards(elem,classAdd, classRemove) {
    for (let i = 0; i < elem[0].length; i++) {
        let num = elem[0][i];
        new Card(
            petsInfo[num].img,
            petsInfo[num].alt,
            petsInfo[num].name,
            petsInfo[num].name,
            classAdd,
            classRemove,
        ).renderCard();
    }

    data = document.querySelectorAll('[data-pets]');
    data.forEach((el) => el.addEventListener('click', (event) => showModal(event)));
}
function showNext() {
    if (countSlider >= petsArr.length-1) {
        countSlider = 0;
    } else {
        countSlider += 1;
    }
    // let timer = setTimeout(function() {
    //     if (countSlider >= petsArr.length-1) {
    //         countSlider = 0;
    //     } else {
    //         countSlider += 1;
    //     }
    //     createCards([petsArr[countSlider]]);
    //   }, 1000);
    slider.innerHTML = '';
    // card.classList.remove('anim-left');
    // card.classList.add('anim-right');
    createCards([petsArr[countSlider]], 'anim-right', 'anim-left');
}
function showPrev() {
    if (countSlider == 0) {
        countSlider = petsArr.length-1;
    } else {
        countSlider -= 1;
    }
    slider.innerHTML = '';
    // card.classList.remove('anim-right');
    // card.classList.add('anim-left');
    createCards([petsArr[countSlider]], 'anim-left', 'anim-right');
}

next.addEventListener('click', (event) => {
    if (event.target.classList.contains('arrow-right')) {
        showNext();
    }
});
prev.addEventListener('click', (event) => {
    if (event.target.classList.contains('arrow-left')) { 
        showPrev();
    }
});