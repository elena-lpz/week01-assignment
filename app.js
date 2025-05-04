console.log("Hello, World!");

// const contact = document.getElementById("visitus");

// button.addEventListener("click", function (event) {
//   console.log(event);
// });

//Scroll to section on click
//https://www.w3schools.com/jsref/met_element_scrollintoview.asp
// https://www.w3schools.com/jsref/met_win_scrollto.asp

//Used w3school to find the different scroll elements, decided to go with scrollIntoView as I found it easier to get the right point I wanted to scroll to

const button = document.getElementById("shop-button");
console.log(button.textContent);

button.addEventListener("click", function (goToShop) {
  document.getElementById("shop").scrollIntoView();
});

//Favourite buttons: attemps
// const favourite = document.getElementById("favourite");

// favourite.addEventListener("click", function (favItem) {
//   console.log(favItem);
//   let element = document.getElementById("favourite");
//   element.classList.replace("fa-regular", "fa-solid");
// });

// favourite.addEventListener("click", function (favItem) {
//   let element = document.getElementById("favourite");
//   console.log(element.className);

// logic here was failing because "fa-regular fa-heart" is a string

//   if ((element.classList = "fa-regular fa-heart")) {
//     element.classList.replace("fa-regular", "fa-solid");
//     else {
//   } else if ((element.classList = "fa-solid fa-heart")) {
// element.classList.replace("fa-solid", "fa-regular");
//     console.log("it works");}
//   }
// });

//Favourite buttons: attemps
// with help from https://www.shecodes.io/athena/9423-change-the-class-name-of-an-html-element-with-javascript#:~:text=Access%20the%20classList%20property%20of,with%20the%20new%20class%20name.
// and https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const favourite = document.querySelector("#favourite");

favourite.addEventListener("click", function (favItem) {
  if (favourite.classList.contains("fa-regular")) {
    favourite.classList.replace("fa-regular", "fa-solid");
  } else if (favourite.classList.contains("fa-solid")) {
    favourite.classList.replace("fa-solid", "fa-regular");
  }
});

const favourite2 = document.querySelector("#favourite2");

favourite2.addEventListener("click", function (favItem) {
  if (favourite2.classList.contains("fa-regular")) {
    favourite2.classList.replace("fa-regular", "fa-solid");
  } else if (favourite2.classList.contains("fa-solid")) {
    favourite2.classList.replace("fa-solid", "fa-regular");
  }
});

const favourite3 = document.querySelector("#favourite3");

favourite3.addEventListener("click", function (favItem) {
  if (favourite3.classList.contains("fa-regular")) {
    favourite3.classList.replace("fa-regular", "fa-solid");
  } else if (favourite3.classList.contains("fa-solid")) {
    favourite3.classList.replace("fa-solid", "fa-regular");
  }
});

//scroll to top button

//I used the same method I used in the goToShop function

const scrollUp = document.getElementById("scroll-up");
console.log(scrollUp.textContent);

scrollUp.addEventListener("click", function (scrollToTop) {
  //   console.log(scrollToTop);
  document.querySelector("#top").scrollIntoView();
});
