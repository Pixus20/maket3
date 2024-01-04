/*form*/
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form_all');
  form.style.opacity = '0'; 
});

document.getElementById('open_form').addEventListener('click', function(){
    var form=document.getElementById('form_all');
    var overlay=document.getElementById('form_overlay');
    form.style.display =(form.style.display === 'flex')? 'none' : 'flex';
    overlay.style.display =(overlay.style.display === 'flex')? 'none': 'flex';
    fadeIn(form)
});

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      }
      else {
        clearInterval(interval);
      }
    }, 100);
  }

document.getElementById('form_close').addEventListener('click', function(){
    var close=document.getElementById('form_all');
    var overlay=document.getElementById('form_overlay');
    var formDiv = document.getElementsByTagName('form')[0];
    close.style.display=(close.style.display === 'none')? 'flex' : 'none';
    overlay.style.display =(overlay.style.display === 'none')? 'flex': 'none';
    fadeOut(close)
    clearForm(formDiv)
});

function fadeOut(element) {
  var opacity = 1;
  var interval = setInterval (function() {
    if (opacity > 0) {
      opacity -= 1;
      element.style.opacity = opacity;
    }
    else {
      clearInterval(interval);
    }
  }, 100);
}

function clearForm(formDiv) {
  var formInputs = formDiv.querySelectorAll('input, textarea');
  formInputs.forEach(function(input) {
      input.value = '';
  });
  var errorBlocks = formDiv.querySelectorAll('.error');
  errorBlocks.forEach(function(errorBlock) {
      errorBlock.parentNode.removeChild(errorBlock);
  });
}





/* menu burger*/ 
document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.main_menu_nav_ul').classList.toggle('open');
    }) 

/* slick slider*/ 
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


//valid
var form = document.getElementById('form');
var phoneInput = document.getElementById('form__number');
var emailInput = document.getElementById('form__email');

form.addEventListener('submit', function(event) {
    var emailValue = emailInput.value;
      if (!containsDigits(emailValue)) {
        alert('Email повинен містити символ @!');
        event.preventDefault(); 
    }    
});

var form = document.getElementById('form');
var phoneInput = document.getElementById('form__number');
var nameInput = document.getElementById('form__text');

phoneInput.addEventListener('input', function(event) {
    var inputValue = event.target.value;
    var sanitizedValue = inputValue.replace(/[^0-9+]/g, '');
    event.target.value = sanitizedValue;
});

nameInput.addEventListener('input', function(event) {
    var inputValue = event.target.value;
    var sanitizedValue = inputValue.replace(/[0-9]/g, '');
    event.target.value = sanitizedValue;
});

form.addEventListener('submit', function(event) {
    var phoneValue = phoneInput.value;
    var nameValue = nameInput.value;
    if (!isValidPhoneNumber(phoneValue)) {
        alert('Телефон повинен містити тільки цифри та знак "+"!');
        event.preventDefault(); 
    }
    if (!containsOnlyLetters(nameValue)) {
        alert('Ім\'я повинно містити тільки букви!');
        event.preventDefault(); 
    }
});
function isValidPhoneNumber(input) {
    return /^[0-9+]+$/.test(input);
}
function containsOnlyLetters(input) {
    return /^[a-zA-Zа-яА-ЯЁё]+$/.test(input);
}

var inputElements = document.querySelectorAll('input');
inputElements.forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.style.boxShadow = 'none';
        }
    });
});
var textElements = document.querySelectorAll('textarea');
textElements.forEach(function(textarea) {
  textarea.addEventListener('input', function() {
      if (textarea.value.trim() !== '') {
          textarea.style.boxShadow = 'none';
      }
  });
});

var inputElements = document.querySelectorAll('input');
inputElements.forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.style.boxShadow = 'none';
        } else {
            input.style.boxShadow = 'inset 0 0 5px red';
        }
    });
});

var textElements = document.querySelectorAll('textarea');
textElements.forEach(function(textarea) {
    textarea.addEventListener('input', function() {
        if (textarea.value.trim() !== '') {
            textarea.style.boxShadow = 'none';
        } else {
            textarea.style.boxShadow = 'inset 0 0 5px red';
        }
    });
});