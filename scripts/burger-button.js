(() => {
    const burgerButton = document.getElementById('burger');
    const menu = document.getElementById('header-menu');
    const logo = document.getElementById('logo');

    let closeMenu = () => {
        burgerButton.classList.remove('header-container__burger-menu--active');
        logo.classList.remove('header__logo--burger-active');
        menu.classList.add('nav--hiden');

        burgerButton.removeEventListener('click', closeMenu);
        burgerButton.addEventListener('click', showMenu);
    }

    let showMenu = () => {
        burgerButton.classList.add('header-container__burger-menu--active');
        logo.classList.add('header__logo--burger-active');
        menu.classList.remove('nav--hiden');

        burgerButton.removeEventListener('click', showMenu);
        burgerButton.addEventListener('click', closeMenu);
    }

    burgerButton.addEventListener('click', showMenu)
}) ()


// header__logo--burger-active
// header-container__burger-menu--active