const swiper1 = new Swiper('.swiper-my-slider', {
    loop: false,
    speed: 800,
    allowTouchMove: false,
    direction: 'vertical',
});

function nextSlide() {
    setTimeout(() => {

        if (swiper1.isEnd) {
            swiper1.slideTo(0, 1500);
        } else {
            swiper1.slideNext();
        }

        swiper1.once('transitionEnd', nextSlide);

    }, 3000);
}
nextSlide();