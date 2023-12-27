/* бургер*/ 
document.querySelector('.menu_burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.main_menu_nav_ul').classList.toggle('open');
    }) 
/* слайдер без бібліотеки
document.addEventListener('DOMContentLoaded', function () {
    const sliderLine = document.querySelector('.slider__line');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider__btn-prev');
    const nextBtn = document.querySelector('.slider__btn-next');
    let currentIndex = 0;
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    setInterval(nextSlide, 4000); 
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});*/

/* слайдер з бібліотеки*/ 
$('.slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplayspead:4000
  });
  $('.slider_btn-prew').click(function(){
    $('.slider').slick('slickPrev');
});

$('.slider_btn-next').click(function(){
    $('.slider').slick('slickNext');
});