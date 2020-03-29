(() => {
    //header nav controll
    const navListItems = document.querySelectorAll('.nav__list-item');
    const sliderAnchor = document.querySelector('.slider-section');
    const infoAnchor = document.querySelector('.info-section');
    const portfolioAnchor = document.querySelector('.portoflio-section');
    const aboutUsAnchor = document.querySelector('.about-us-section');
    const formAnchor = document.querySelector('.form-section');
    const navItemActive = 'nav__link--active';

    function removeActiveAttribute() {
        navListItems.forEach((it) => {
            it.querySelector('.nav__link').classList.remove(navItemActive);
        })
    }

    document.addEventListener('scroll', (evt)=> {
        //console.log(formAnchor.getBoundingClientRect());

        if (sliderAnchor.getBoundingClientRect().top < 100 && aboutUsAnchor.getBoundingClientRect().top > -500) {
            removeActiveAttribute();
            navListItems[0].querySelector('.nav__link').classList.add(navItemActive);
        }

        if (infoAnchor.getBoundingClientRect().top < 100 && infoAnchor.getBoundingClientRect().top > -420) {
            removeActiveAttribute();
            navListItems[1].querySelector('.nav__link').classList.add(navItemActive);
        }

        if (portfolioAnchor.getBoundingClientRect().top < 95 && portfolioAnchor.getBoundingClientRect().top > -775) {
            removeActiveAttribute();
            navListItems[2].querySelector('.nav__link').classList.add(navItemActive);
        }

        if (aboutUsAnchor.getBoundingClientRect().top < 95 && aboutUsAnchor.getBoundingClientRect().top > -641) {
            removeActiveAttribute();
            navListItems[3].querySelector('.nav__link').classList.add(navItemActive);
        }

        if (formAnchor.getBoundingClientRect().top < 93) {
            removeActiveAttribute();
            navListItems[4].querySelector('.nav__link').classList.add(navItemActive);
        }

    });
    
    
    
    //slider
    const rowLeft = document.getElementById('row-left');
    const rowRight = document.getElementById('row-right');

    let sliderItems = document.querySelectorAll('.slider-section__slider-item');
    let currentItem = 0;
    let isEnabled = true;

    function changeCurrentItem(num) {
        currentItem = (num + sliderItems.length) % sliderItems.length;
    }

    function hideItem(direction) {
        isEnabled = false;
        sliderItems[currentItem].classList.add(direction);
        sliderItems[currentItem].addEventListener('animationend',function() {
            this.classList.remove('slider-section__slider-item--active', direction);
        })
    }

    function showItem(direction) {
        sliderItems[currentItem].classList.add('slider-section__slider-item--next', direction);
        sliderItems[currentItem].addEventListener('animationend',function() {
            this.classList.remove('slider-section__slider-item--next', direction);
            this.classList.add('slider-section__slider-item--active');
            isEnabled = true;
        })
    }

    function previousItem(num) {
        hideItem('slider-section__slider-item--to-right');
        changeCurrentItem(num - 1);
        showItem('slider-section__slider-item--from-right');
    }

    function nextItem(num) {
        hideItem('slider-section__slider-item--to-left');
        changeCurrentItem(num + 1);
        showItem('slider-section__slider-item--from-left');
    }

    rowLeft.addEventListener('click', function() {
        if (isEnabled) {
            previousItem(currentItem);
        }
    });

    rowRight.addEventListener('click', () => {        /////////
        if (isEnabled) {
            nextItem(currentItem);
        }
    });
    //phone-activate

    const sliderImageOne = document.querySelector('.slider-section__image-one');
    const sliderImageTwo = document.querySelector('.slider-section__image-two');

    let toColorVertical = (evt) => {
        if (evt.offsetX <= 215 && evt.offsetY <= 458) {
            sliderImageOne.querySelector('div').classList.add('black-vertical');
        }
    }

    let toColorHorizontal = (evt) => {
        if (evt.offsetX <= 458 && evt.offsetY <= 215) {
            sliderImageTwo.querySelector('div').classList.add('black-horizontal');
        }
    }

    sliderImageOne.addEventListener('click', toColorVertical);
    sliderImageTwo.addEventListener('click', toColorHorizontal);

    //portfolio start
    const portfolioTabs = document.querySelector('.portoflio-section__list');
    const imagesListItem = document.querySelectorAll('.image-list__list-item');
    const imageList = document.querySelector('.portoflio-section__image-list');
    const tabItems = document.querySelectorAll('.portoflio-section__list-item');

    let imagesAnimationFlag = true;

    let changeTab = (evt) => {
        tabItems.forEach((it) => {
            it.classList.remove('portoflio-section__list-item--active');
        })
        console.log(evt.target.parentNode);
        evt.target.parentNode.classList.add('portoflio-section__list-item--active');
    }

    let toReversImages = (evt) => {
        let imagesListItemTest = document.querySelectorAll('.image-list__list-item');
        let removableItem = imagesListItemTest[0];
        imageList.appendChild(removableItem);
    };

    let imagesAnimation = (evt) => {
        evt.preventDefault();
        imagesAnimationFlag = false;

        (() => {
            imagesListItem.forEach((it, i, arr) => {
                it.style.transform = 'scale(0)';
            });
        }) ()
    
        let animationEnd = () => {
            imagesListItem.forEach((it, i, arr) => {
                it.style.transform = 'scale(1)'; 
            });
            imagesAnimationFlag = true;
        }
        setTimeout(toReversImages, 200);
        setTimeout(animationEnd, 400, evt);
    }

    portfolioTabs.addEventListener('click', (evt) => {
        evt.preventDefault();

        if (imagesAnimationFlag) {
            if (evt.target.classList.contains('portoflio-section__link')) {
                changeTab(evt);
                imagesAnimation(evt);
            //setTimeout(toReversImages, 600, evt);
        }
        }
    });

    let toAddBorder = (targetElement) => {
        imagesListItem.forEach((it) => {
            if (it.classList.contains('image-list__image--border')) {
                it.classList.remove('image-list__image--border');
            }
        });
        targetElement.classList.add('image-list__image--border');
    }
    
    imageList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('image-list__image')) {
            toAddBorder(evt.target.parentNode);
        }
    });

    //form
    const formButton = document.querySelector('.main-form__button');
    const tt = document.querySelector('.form-container__main-form');

    let renderFeedbackElement = (evt) => {
        evt.preventDefault();

        let subject = document.getElementById('subject').value;
        let describeValue = document.getElementById('Describe').value;
        let describe = `Описание: ${describeValue}`;
        if (describeValue === '') {
            describe = 'Без описания';
        }
        console.log();
        let element = 
        `<div class="popup-shadow">
        <div class="popup">
        <p>Письмо отправлено</p>
        <p class="popup-text">Тема: ${subject}</p>
        <p class="popup-text">${describe}</p>
        <button class="popup__button">ОК</button>
        </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', element);

        let popupButton = document.querySelector('.popup__button');

        let closePopup = () => {
            let popup = document.querySelector('.popup-shadow');
            popup.remove();
        }

        popupButton.addEventListener('click', closePopup);
        document.addEventListener('click', (evt) => {
            if (!evt.target.classList.contains('popup')) {
                closePopup(); 
            }
        });
    }

    //tt.addEventListener('click', renderFeedbackElement)
    tt.addEventListener('submit', renderFeedbackElement)

}) ()


