/*form*/
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form_all');
  form.style.opacity = '0'; 
});

document.getElementById('open_form').addEventListener('click', function(){
    var form=document.getElementById('form_all');
    var overlay=document.getElementById('overlay');
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
    var overlay=document.getElementById('overlay');
    var formDiv = document.getElementById('form');
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
document.querySelector('.menu_burger').addEventListener('click',function(){
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


/*valid*/
document.getElementById("form__send").addEventListener("click", function(event) {
  var name = document.getElementById("form__text").value;
  var phone = document.getElementById("form__number").value;
  var email = document.getElementById("form__email").value;
  var isValid = true;


  if (name.trim() === "" || !/^[а-яА-ЯІіЇїЄєҐґ\s]+$/.test(name)) {
    isValid = false;
    showError("form", "form__text", "Ім'я є обов'язковим полем і може містити лише українські літери");
  }

  if (phone.trim() === "" || !/^\+?3?8?(0[5-9][0-9]\d{7})$/.test(phone)) {
    isValid = false;
    showError("form", "form__number", "Телефон є обов'язковим полем");
  }

  if (email.trim() === "" || !isValidEmail(email)) {
    isValid = false;
    showError("form", "form__email", "Електронна адреса є обов'язковим полем");
  }

  if (!isValid) {
    event.preventDefault(); 
  }
});

function showError(formId, field, message) {
  var errorElement = document.createElement("span");
  errorElement.className = "error";
  errorElement.innerHTML = message;

  var targetElement = document.getElementById(formId).querySelector("#" + field);
  targetElement.parentNode.insertBefore(errorElement, targetElement.nextSibling);
}

function isValidEmail(email) {

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById('form__send').addEventListener('click', function(event) {
  var formDiv = document.getElementById('form');
  var isValid = validateForm(formDiv);
  if (isValid) {
      handleFormSubmission();

      clearErrors(formDiv);
  } else {
      event.preventDefault(); 
  }
});

function handleFormSubmission() {
  alert('Форма відправлена!');
}

function validateForm(formDiv) {
  var formInputs = formDiv.querySelectorAll('input[required], textarea[required]');
  var isValid = true;
  formInputs.forEach(function(input) {
      var value = input.value.trim();
      var errorMessage = input.getAttribute('title');
      if (value === '') {
          showError(formDiv, input, errorMessage || "Це поле є обов'язковим");
          isValid = false;
      } else {
          hideError(formDiv, input);
      }
  });
  return isValid;
}

function showError( input, errorMessage) {
  var errorBlock = document.createElement('div');
  errorBlock.className = 'error';
  errorBlock.textContent = errorMessage;
  input.parentNode.appendChild(errorBlock);
}

function hideError( input) {
  var errorBlock = input.parentNode.querySelector('.error');
  if (errorBlock) {
      errorBlock.parentNode.removeChild(errorBlock);
  }
}

function clearErrors(formDiv) {
  var errorBlocks = formDiv.querySelectorAll('.error');
  errorBlocks.forEach(function(errorBlock) {
      errorBlock.parentNode.removeChild(errorBlock);
  });
}



