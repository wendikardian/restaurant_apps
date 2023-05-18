import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import dataJSON from '../public/data/DATA.json';


const menu = document.querySelector('#menu');
const menuDiv = document.querySelector('#mobile-menu');


menu.addEventListener('click', function () {
    // console.log(menuDiv)
    menuDiv.classList.toggle('open');
    // menuDiv.classList.toggle('flex');
    }
);

const data = Object.values(dataJSON)

const rest = document.querySelector('#restaurant-container');

data[0].forEach(item => {
    console.log(item)
    const divParent = document.createElement('div');
    divParent.setAttribute('tabindex', 0)
    divParent.classList.add('card');
    const button = document.createElement('button');
    button.classList.add('card-button');
    button.textContent = 'Detail';
    const imgChild = document.createElement('img');
    imgChild.setAttribute('alt', item.name);
    const pTitle = document.createElement('p');
    pTitle.className = 'card-name-restaurant';
    const pLocation = document.createElement('p');
    const pRating = document.createElement('p');
    pTitle.textContent = item.name;
    pLocation.textContent = `Location : ${item.city}`
    pRating.textContent = `Rating : ${item.rating}`
    imgChild.src = item.pictureId;
    divParent.appendChild(imgChild);
    divParent.appendChild(pTitle);
    divParent.appendChild(pLocation);
    divParent.appendChild(pRating);

    divParent.appendChild(button);
    rest.appendChild(divParent);

});