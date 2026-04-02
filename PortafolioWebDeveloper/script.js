
/* Enlace de salida de scrollsections*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header mav a');

window.onscroll=()=> {
     sections.forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top<offset + height){
         navLinks.forEach(links=>{
          links.classList.remove('active')
          document.querySelector('header nav a[href*=' + id +']').classList.add('active');
         });
      };
     });
     /* Barra de navegacion fija*/

let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);

/* Eliminar el icono de etiqueta y la barra de navegación al hacer clic*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

     
};

/* barra de navegación del icono de Taggle*/ 
let menuIcon= document.querySelector('#icono-menu');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1200,
  delay: 150
});

ScrollReveal().reveal('.casa-content, .imagen-yo', {
  origin: 'bottom'
});

ScrollReveal().reveal('.SobreMi-img', {
  origin: 'left'
});

ScrollReveal().reveal('.SobreMi-content', {
  origin: 'right'
});

ScrollReveal().reveal('.Dominios-box', {
  origin: 'bottom',
  interval: 150
});

ScrollReveal().reveal('.portafolio-box', {
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.footer', {
  origin: 'bottom'
});

const texts = [
  "Frontend Developer",
  "Estudiante de Ingeniería de Software",
  "UX/UI Designer",
  "Web Designer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 20;
const delay = 1500;

const textElement = document.querySelector(".multiple-text");

function typeEffect() {
  const current = texts[textIndex];

  if (!isDeleting) {
    textElement.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => isDeleting = true, delay);
    }
  } else {
    textElement.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();




const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(0, 224, 255, 0.6)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});




