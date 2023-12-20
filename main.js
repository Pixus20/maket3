document.querySelector('.menu_burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.main_menu_nav_ul').classList.toggle('open');
    })