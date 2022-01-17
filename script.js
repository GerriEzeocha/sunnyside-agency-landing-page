const mobileIcon = document.getElementById("mobileIcon");
const mobileNav = document.getElementById("mobile_navLinks");
const menuarrow = document.getElementById("menuarrow");

mobileIcon.addEventListener("click", function (e) {
    mobileNav.classList.toggle("mobile_active");
    menuarrow.classList.toggle("menuArrow_active");
});