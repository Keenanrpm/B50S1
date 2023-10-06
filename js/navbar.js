let navbarMobileOpen = false;

function openNavbar(event) {
  event.preventDefault();

  let navbarMobileEL = document.getElementsByClassName("navbar__mobile");

  if (!navbarMobileOpen) {
    navbarMobileEL[0].style.height = "auto";
    navbarMobileOpen = true;
  } else {
    navbarMobileEL[0].style.height = 0;
    navbarMobileOpen = false;
  }
}
