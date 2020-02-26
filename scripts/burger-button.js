(() => {
    const burgButton = document.querySelector('.nav__burger-container');
    const burgElement = burgButton.querySelector('.nav__burger-button');
    const popup = document.querySelector('.nav__list');

    let closePopup = () => {
        popup.classList.add('hidden');
        burgElement.classList.remove('burger-active');
        burgButton.removeEventListener('click', closePopup);
        burgButton.addEventListener('click', showPopup);
    }

    let showPopup = () => {
        popup.classList.remove('hidden');
        burgElement.classList.add('burger-active');
        burgButton.removeEventListener('click', showPopup);
        burgButton.addEventListener('click', closePopup);
    }

    burgButton.addEventListener('click', showPopup);
}) ()