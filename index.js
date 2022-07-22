let dropDownBtn = document.querySelector(".nav__drop-down");
let menuItems = document.querySelector(".nav__items");

const toggleMenu = () => {
    menuItems.classList.toggle("display-block");
};

dropDownBtn.addEventListener("click", toggleMenu);
