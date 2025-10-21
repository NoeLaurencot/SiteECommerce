function copyToClipboard() {
    var promoCode = document.getElementById('promoCode');
    promoCode.type = 'text';
    promoCode.select();
    promoCode.setSelectionRange(0, 99999); // Pour appareil tactile est mobile
    navigator.clipboard.writeText(promoCode.value);
    promoCode.type = 'hidden';
    alert("Promo Code copied to clipboard");
}
