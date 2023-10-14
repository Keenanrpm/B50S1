// let navbarMobileOpen = false;

// function openNavbar(event) {
//   event.preventDefault();

//   let navbarMobileEL = document.getElementsByClassName("navbar__mobile");

//   if (!navbarMobileOpen) {
//     navbarMobileEL[0].style.height = "auto";
//     navbarMobileOpen = true;
//   } else {
//     navbarMobileEL[0].style.height = 0;
//     navbarMobileOpen = false;
//   }
// }

let navbarMobileOpen = false;

function openNavbar(event) {
  event.preventDefault();

  let navbarMobileEL = document.getElementById("navbar__mobile");

  console.log(navbarMobileEL);

  if (!navbarMobileOpen) {
    navbarMobileEL.style.height = "auto";
    navbarMobileOpen = true;
  } else {
    navbarMobileEL.style.height = 0;
    navbarMobileOpen = false;
  }
}