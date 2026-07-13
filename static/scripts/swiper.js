let widthBase = 1440;

if (window.innerWidth <= 767) {
    widthBase = 375;
} else if (window.innerWidth <= 1024) {
    widthBase = 980;
}

const widthMultiplier = window.innerWidth / widthBase;

const swiper1 = new Swiper('.swiper-my-slider', {
    loop: false,
    speed: 800,
    allowTouchMove: false,
    direction: 'vertical',
    spaceBetween: 20 * widthMultiplier,
});

function nextSlide() {
    setTimeout(() => {

        if (swiper1.isEnd) {
            swiper1.slideTo(0, 500);
        } else {
            swiper1.slideNext();
        }

        swiper1.once('transitionEnd', nextSlide);

    }, 3000);
}
nextSlide();