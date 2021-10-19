// Menu  - abre e fecha 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

// cliques no menu aberto
const links = document.querySelectorAll('nav ul li a')

for (const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

// Testimonials Slide Caroussel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    }
  }

});

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(`
#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonial, #contact .text, #contact .links,
footer .brand, footer .social
`,{interval: 50})




// Animação - Sombra do Header com o scroll
function changeThemeNavBar() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  } 
}

// Opção ativa do Menu conforme a página
const sections = document.querySelectorAll('main section[id]');
function activateMenuDurationSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectoinId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointEnd && checkpointStart) {
      document.querySelector('nav ul li a[href*=' + sectoinId + section[id] + ']').classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectoinId + section[id] + ']').classList.remove('active')
    }
  }
}

// Botao volta ao topo, revelação
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top') 

  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  } 
}

window.addEventListener('scroll', function() {
  backToTop(),
  changeThemeNavBar()
  activateMenuDurationSection()
}) 

