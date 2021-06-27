/*===== AFFICHAGE DE MENU =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE ET SUPPRIME LE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*LIEN ACTIF*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*SUPPRIME LE MENU MOBILE*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== ANIMATION DE RÉVÉLATION DE DÉFILEMENT =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: true
});

/*DÉFILER ACCUEIL*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*FAITES DÉFILER*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*COMPÉTENCES DE DÉFILEMENT*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*TRAVAIL DE DÉFILEMENT*/
sr.reveal('.work__img',{interval: 200}); 

/*DÉFILEMENT CONTACTER*/
sr.reveal('.contact__input',{interval: 200}); 




