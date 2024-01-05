/*form*/
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form_all");
  form.style.opacity = "0";
});
document.getElementById("open_form").addEventListener("click", function () {
  var form = document.getElementById("form_all");
  var overlay = document.getElementById("form_overlay");
  form.style.display = form.style.display === "flex" ? "none" : "flex";
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
  fadeIn(form);
});
function fadeIn(element) {
  var opacity = 0;
  var interval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}
/* menu burger*/
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".main_menu_nav_ul").classList.toggle("open");
});
/* slick slider*/
$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplayspead: 4000,
});
$(".slider_btn-prew").click(function () {
  $(".slider").slick("slickPrev");
});
$(".slider_btn-next").click(function () {
  $(".slider").slick("slickNext");
});

//DropDpwn list
var scrollPosition = window.scrollY || document.documentElement.scrollTop;
document.querySelectorAll(".content__left_itm").forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();   
    window.scrollBy(0, 1);    
    scrollPosition = window.scrollY || document.documentElement.scrollTop;    
    window.scrollTo(0, scrollPosition);
    this.classList.toggle("active");
    var dropdownList = this.querySelector(".content__dropdown__list");
    if (dropdownList) {
      dropdownList.classList.toggle("open_list");
    }
  });
});
//valid
var form = document.getElementById("form");
var nameInput = document.getElementById("form__text");
var numberInput = document.getElementById("form__number");
var emailInput = document.getElementById("form__email");
var massageInput = document.getElementById("form__message");
//text input
nameInput.addEventListener('input', function(e){
  var sanitizedValue = e.target.value.replace(/[^a-zA-Z\u0400-\u04FFёЁ']/g, "");
    sanitizedValue = sanitizedValue.slice(0, 50);
    e.target.value = sanitizedValue;
});
//number input
numberInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^0-9+]/g, "");
  sanitizedValue = sanitizedValue.slice(0, 13);
  e.target.value = sanitizedValue;
  if (sanitizedValue.length === 13) {
    e.target.style.boxShadow = "none";
  } else {
    e.target.style.boxShadow = "inset 0 0 5px red";
  }
});
numberInput.addEventListener("focus", function (e) {
  if (!e.target.value.startsWith("+38")) {
    e.target.value = "+38" + e.target.value;
  }
});
numberInput.addEventListener("blur", function (e) {
  var inputValue = e.target.value;
  if (inputValue.length < 13) {
    e.target.value = "+38" + "".repeat(13 - inputValue.length);
  } 
  if (inputValue.length === 13) {
    e.target.style.boxShadow = "none";
  } else {
    e.target.style.boxShadow = "inset 0 0 5px red";
  }
});
//email input
emailInput.addEventListener("input", function (e) {
  var sanitizedValue = "";
  for (var i = 0; i < e.target.value.length; i++) {
    var char = e.target.value[i];
    if (i !== 0 || /[a-zA-Z0-9]/.test(char)) {
      sanitizedValue += char.replace(/[^a-zA-Z0-9._@-]/g, "");
    }
  }
  sanitizedValue = sanitizedValue.slice(0, 50);
  e.target.value = sanitizedValue;
});
//submit
document.getElementById('form__send').addEventListener("click", function (event) {
  var formElements = document.getElementById('form').elements;
  var isPhoneNumberValid = false;
  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    if (element.tagName !== 'BUTTON' && element.value.trim() === '') {
      element.style.boxShadow = "inset 0 0 5px red";
    } else {
      element.style.boxShadow = "none";
    }
    if (element.id === 'form__number') {
      isPhoneNumberValid = element.value.trim().length === 13;
      if (!isPhoneNumberValid) {
        element.style.boxShadow = 'inset 0 0 5px red';
      }
    }
  }
  var isEmptyField = Array.from(formElements).some(function (element) {
    return element.tagName !== 'BUTTON' && element.value.trim() === '';
  });
  if (isEmptyField || !isPhoneNumberValid) {
    event.preventDefault();
  } else {
    event.preventDefault();
    alert('Форма надіслана успішно!');
    clearForm(document.getElementById('form'));
    closeForm();
  }
});
function clearForm(form) {
  var formElements = form.elements;
  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    if (element.tagName !== 'BUTTON') {
      element.value = ''; 
      element.style.boxShadow = 'none';
    }
  }
}
document.getElementById("form_close").addEventListener("click", function (event) {
  closeForm();
});
function closeForm() {
  var close = document.getElementById("form_all");
  var overlay = document.getElementById("form_overlay");
  var form = document.getElementById("form");
  fadeOut(close, function() {
      clearForm(form); 
    close.style.display = "none";
    overlay.style.display = "none";
  });
}
function fadeOut(element, callback) {
  var opacity = 1;
  var interval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
      if (callback && typeof callback === 'function') {
        callback();
      }
    }
  }, 100);
}
