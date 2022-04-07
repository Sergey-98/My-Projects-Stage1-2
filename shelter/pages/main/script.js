`use strict`;

//--------------- for how help block--------------
const help = {
    0: {
        icon: '../../assets/icons/icon-pet-food.svg',
        title: 'Pet food',
    },
    1: {
        icon: '../../assets/icons/icon-transportation.svg',
        title: 'Transportation',
    },
    2: {
        icon: '../../assets/icons/icon-toys.svg',
        title: 'Toys',
    },
    3: {
        icon: '../../assets/icons/icon-bowls-and-cups.svg',
        title: 'Bowls and cups',
    },
    4: {
        icon: '../../assets/icons/icon-shampoos.svg',
        title: 'Shampoos',
    },
    5: {
        icon: '../../assets/icons/icon-vitamins.svg',
        title: 'Vitamins',
    },
    6: {
        icon: '../../assets/icons/icon-medicines.svg',
        title: 'Medicines',
    },
    7: {
        icon: '../../assets/icons/icon-collars-leashes.svg',
        title: 'Collars / leashes',
    },
    8: {
        icon: '../../assets/icons/icon-sleeping-area.svg',
        title: 'Sleeping areas',
    }

}
let helpLength = Object.keys(help).length;
// let helpList = document.querySelector('.help-list');
// const helpListItem = document.createElement('li');
// helpListItem.classList.add('help-list-item');
// helpList.append(helpListItem);
// const iconItem = document.createElement('img');
// iconItem.classList.add('help-list-item-icon');
// iconItem.setAttribute(src, h.icon);
// helpListItem.append(iconItem);

let helpList = document.querySelector('.help-list');

for (let i = 0; i < helpLength; i++) {
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
// -----------------------------------------------