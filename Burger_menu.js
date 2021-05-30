const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('Nav_header');
const Francesca_svg = document.getElementById('Francesca_header');

hamburger.addEventListener('click', () =>{
    //Ajout de classes temporaires -> changement CSS -> Affichage menu
    navUl.classList.toggle('show');
    hamburger.src.t
    Francesca_svg.classList.toggle('hide');
    
    // Changement du SVG du menu (Ouvrir/Fermer)
    if(navUl.className == 'show') {
        hamburger.setAttribute('src', 'Croix.svg');
    }
    else {
        hamburger.setAttribute('src', 'Burger.svg');
    }
});