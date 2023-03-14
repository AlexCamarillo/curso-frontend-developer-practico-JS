const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');




navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }  
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }      
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }     
    aside.classList.toggle('inactive');
}