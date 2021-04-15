// Script voor het bewerken van de 
// nav na de eerste section 

const header = document.querySelector("header");
const sectionOne = document.querySelector(".gradient");

const faders = document.querySelectorAll('.fadeIn');

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
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {};

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
options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
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


const names = ['Developer', 'Front-end Developer', 'UX Designer', 'Designer', 'Artist', 'Friend'];
let i = 0;

while(i < names.length){
  console.log(names[i]);
  i++;
}
