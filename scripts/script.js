(() => {
    const SLIDER_COLORS = {
        BLUE: '#648BF0',
        RED: '#f06c64'
    }
    
    const sliderBackground = document.querySelector('.slider-section__background');
    const slideOne = document.getElementById('slide-one');
    const slideTwo = document.getElementById('slide-two');
    const rowLeft = document.getElementById('row-left');
    const rowRight = document.getElementById('row-right');
    let flag = true;

    //slider
    let toSlide = () => {
        if (flag) {
            sliderBackground.style.backgroundColor = SLIDER_COLORS.BLUE;
            slideOne.style.display = 'none';
            slideTwo.style.display = 'block';
            //slideOne.style.opacity = '0';
            //slideTwo.style.opacity = '1';
            flag = false;
        } else {
            sliderBackground.style.backgroundColor = SLIDER_COLORS.RED;
            //slideOne.style.opacity = '1';
            //slideTwo.style.opacity = '0';
            slideOne.style.display = 'block';
            slideTwo.style.display = 'none';
            flag = true;
        }
    }

    rowLeft.addEventListener('click', toSlide);
    rowRight.addEventListener('click', toSlide);

    //phone-activate

    const sliderImageOne = document.querySelector('.slider-section__image-one');
    const sliderImageTwo = document.querySelector('.slider-section__image-two');

    let toColorVertical = (evt) => {
        if (evt.offsetX <= 215 && evt.offsetY <= 458) {
            sliderImageOne.firstChild.classList.add('black-vertical');
        }
    }

    let toColorHorizontal = (evt) => {
        if (evt.offsetX <= 458 && evt.offsetY <= 215) {
            sliderImageTwo.firstChild.classList.add('black-horizontal');
        }
    }

    sliderImageOne.addEventListener('click', toColorVertical);
    sliderImageTwo.addEventListener('click', toColorHorizontal);

    //portfolio start
    const portfolioTabs = document.querySelector('.portoflio-section__list');
    const imagesListItem = document.querySelectorAll('.image-list__list-item');
    const imageList = document.querySelector('.portoflio-section__image-list');
    ///////////////////////////////////////////////////////////
    let imagesAnimation = (evt) => {
        evt.preventDefault();
        (() => {
            imagesListItem.forEach((it, i, arr) => {
                it.style.transform = 'scale(0)';
            });
        }) ()
    
        let animationEnd = () => {
            imagesListItem.forEach((it, i, arr) => {
                it.style.transform = 'scale(1)'; 
            });
        }
        setTimeout(toReversImages, 200);
        setTimeout(animationEnd, 400, evt);
    }

    let toReversImages = (evt) => {
        let imagesListItemTest = document.querySelectorAll('.image-list__list-item');
        let removableItem = imagesListItemTest[0];
        imageList.appendChild(removableItem);
    };
    /////////////////////////////////////////////////////////////////
    portfolioTabs.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('portoflio-section__link')) {
            imagesAnimation(evt);
            //setTimeout(toReversImages, 600, evt);
        }
    });

    let toAddBorder = (targetElement) => {
        imagesListItem.forEach((it) => {
            if (it.querySelector('img').classList.contains('image-list__image--border')) {
                it.querySelector('img').classList.remove('image-list__image--border');
            }
        });
        targetElement.classList.add('image-list__image--border');
    }
    
    imageList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('image-list__image')) {
            toAddBorder(evt.target);
        }
    });

}) ()


/**

imagesList.forEach((it) => {
        it.addEventListener('click', () => {
            
            imagesArr.forEach((it2) => {
                if (it2.querySelector('img').classList.contains(borderClass)) {
                    it2.querySelector('img').classList.remove(borderClass);
                }
            });
            it.querySelector('img').classList.add(borderClass);
            
        });
    });

*/