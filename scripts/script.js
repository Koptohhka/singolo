(() => {
    let SLIDER_COLORS = {
        blue: '#648BF0',
        red: '#f06c64'
    }


    const sliderBackground = document.querySelector('.slider-section__background');
    const slideOne = document.getElementById('slide-one');
    const slideTwo = document.getElementById('slide-two');
    const rowLeft = document.getElementById('row-left');
    const rowRight = document.getElementById('row-right');
    let flag = true;

    let toSlide = () => {
        if (flag) {
            sliderBackground.style.backgroundColor = SLIDER_COLORS.blue;
            slideOne.style.opacity = '0';
            slideTwo.style.opacity = '1';
            console.log(slideTwo.style);
            flag = false;
        } else {
            sliderBackground.style.backgroundColor = SLIDER_COLORS.red;
            slideOne.style.opacity = '1';
            slideTwo.style.opacity = '0';
            flag = true;
        }
    }

    rowLeft.addEventListener('click', toSlide);
    rowRight.addEventListener('click', toSlide);
}) ()