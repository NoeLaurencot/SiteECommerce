window.addEventListener('scroll', function () { // Ajoute un listener de scroll
    const nav = document.querySelector('nav'); // Stocke la balise nav dans un variable
    if (window.scrollY > 20) { // Regarde si la page a été scrollée de plus de 20 pixels
        nav.classList.add('scrolled'); // Ajoute la classe scrolled à la nav
    } else {
        nav.classList.remove('scrolled'); // Sinon enlève la classe scrolled
    }
});