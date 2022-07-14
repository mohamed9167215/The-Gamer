let menu = document.querySelector('.menu-icons');
let navbar = document.querySelector('.menu');
menu.onclick =(function(){
    menu.classList.toggle('move');
    navbar.classList.toggle('active');
});


/* Notificatio */
let bell = document.querySelector('.notification');
let animation = document.querySelector('#bell-icon');
animation.onclick=(function(){
      bell.classList.toggle('activety');
});

/* Swiper js */
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
