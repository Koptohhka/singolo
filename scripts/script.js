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
    const imagesArr = document.querySelectorAll('.image-list__list-item');
    const portfolioNav = document.querySelectorAll('.portoflio-section__list-item');
    const borderClass = 'image-list__image--border';
    
    let toReversImages = (evt) => {
        evt.preventDefault();

        let firstImageSrc = '';
        imagesArr.forEach((it, i, arr) => {
            if (i === 0) {
                firstImageSrc = it.querySelector('img').src;
            } 
            if (i === arr.length - 1) {
                it.querySelector('img').src = firstImageSrc;
            } else {
                it.querySelector('img').src = arr[i + 1].querySelector('img').src;
            }      
            
        });
    }

    let toBorder = (it) => {
        //
    }

    portfolioNav.forEach((it) => {
        it.addEventListener('click', toReversImages);
    });

    imagesArr.forEach((it) => {
        it.addEventListener('click', () => {
            
            imagesArr.forEach((it2) => {
                if (it2.querySelector('img').classList.contains(borderClass)) {
                    it2.querySelector('img').classList.remove(borderClass);
                }
            });
            it.querySelector('img').classList.add(borderClass);
            
        });
    });   
}) ()

