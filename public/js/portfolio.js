// Script voor het bewerken van de 
// nav na de eerste section 

const navScroll = document.querySelector('nav')
const header = document.querySelector("header");
const sectionOne = document.querySelector(".gradient");

const faders = document.querySelectorAll('.fadeIn');
const sliders = document.querySelectorAll('.slideIn');

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneObserver,
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        navScroll.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
        navScroll.classList.remove("nav-scrolled");
      }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, 
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

// Javascript voor het contactformulier 

const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'succes'){
      alert('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert('Something went wrong!')
    }
  }

  xhr.send(JSON.stringify(formData))
})


// JS voor de bar charts!

$(function(){
  $('.bars li .bar').each(function(key, bar) {
    const percentage = $(this).data('percentage');
    $(this).animate({
      'height' : percentage + '%'
    },1000);
  })
})
