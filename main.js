/*форма*/
document.getElementById('open_form').addEventListener('click', function(){
    var form=document.getElementById('form_all');
    var overlay=document.getElementById('overlay');
    form.style.display =(form.style.display === 'flex')? 'none' : 'flex';
    overlay.style.display =(overlay.style.display === 'flex')? 'none': 'flex';
});

document.getElementById('form_close').addEventListener('click', function(){
    var close=document.getElementById('form_all');
    var overlay=document.getElementById('overlay');
    close.style.display=(close.style.display === 'none')? 'flex' : 'none';
    overlay.style.display =(overlay.style.display === 'none')? 'flex': 'none';
});


/* бургер*/ 
document.querySelector('.menu_burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.main_menu_nav_ul').classList.toggle('open');
    }) 

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