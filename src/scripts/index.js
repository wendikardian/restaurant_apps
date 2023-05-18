import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";
import dataJSON from "../public/data/DATA.json";

const menu = document.querySelector("#menu");
const menuDiv = document.querySelector("#mobile-menu");
const main = document.querySelector("main");

menu.addEventListener("click", function (event) {
  // console.log(menuDiv)
  menuDiv.classList.toggle("open");
  event.stopPropagation();

  // menuDiv.classList.toggle('flex');
});

main.addEventListener("click", function () {
  menuDiv.classList.remove("open");
});

const data = Object.values(dataJSON);

const rest = document.querySelector("#restaurant-container");

data[0].forEach((item) => {
  console.log(item);
  const divParent = document.createElement("div");
  divParent.setAttribute("tabindex", 0);
  divParent.classList.add("card");
  const imgChild = document.createElement("img");
  imgChild.classList.add("card-image");
  imgChild.setAttribute("alt", item.name);
  const pTitle = document.createElement("p");
  pTitle.className = "card-name-restaurant";
  const pLocation = document.createElement("p");
  const pRating = document.createElement("p");
  pTitle.textContent = item.name;
  pLocation.textContent = `Location : ${item.city}`;
  pRating.textContent = `Rating : ${item.rating}`;
  imgChild.src = item.pictureId;
  divParent.appendChild(imgChild);
  divParent.appendChild(pTitle);
  divParent.appendChild(pLocation);
  divParent.appendChild(pRating);
  rest.appendChild(divParent);
});

const restaurantInput = document.querySelector("#restaurant-input");
// console.log(restaurantInput);

data[0].forEach((item) => {
  const option = document.createElement("option");
  option.setAttribute("value", item.name);
  option.textContent = item.name;
  restaurantInput.appendChild(option);
});

const button = document.querySelector(".card-button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  alert("thanks for booking");
});
