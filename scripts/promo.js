const promoInput = document.getElementById('promo-input');
const promoSubmit = document.getElementById('promo-input-submit');

promoSubmit.addEventListener('click', function () {
    const promoCode = promoInput.value.trim();

    if (promoCode === 'J3SU1SP4UVR3') {

        window.open('assets/promo-banner.mp4', '_blank');
    } else {
        alert('Code promo invalide');
    }
});
