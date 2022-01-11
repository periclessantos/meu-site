let botaMenu = document.querySelector("a.menu-mobile");

botaMenu.addEventListener("click", function () {
  let abaMenu = document.querySelector("nav.aba-menu-mobile");

  if (abaMenu.style.height == "") {
    abaMenu.style.height = "180px";
  } else {
    abaMenu.style.height = "";
  }
});
