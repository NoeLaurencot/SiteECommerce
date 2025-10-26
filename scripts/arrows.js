const buttonLeft = document.getElementById('horizontal-left');
const buttonRight = document.getElementById('horizontal-right');
const scrollDiv = document.getElementById('img-scroll');
const scrollAmount = 400;


buttonLeft.addEventListener('click', function () {
    scrollDiv.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

buttonRight.addEventListener('click', function () {
    scrollDiv.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
