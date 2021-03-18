const header = document.querySelector("header");
const sectionOne = document.querySelector("gradient");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneObserver,
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);