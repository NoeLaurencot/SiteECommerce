function copyToClipboard() {
    var promoCode = document.getElementById('promoCode');

    promoCode.type = 'text';
    promoCode.select();
    promoCode.setSelectionRange(0, 99999); // Pour appareil tactile
    navigator.clipboard.writeText(promoCode.value);
    promoCode.type = 'hidden';
    addAlert("Code Promo copiée !"); // avec cette fonction les message sera appelée plusieurs fois si l'utilisateur spam clik
}
function isEmailRightSpelled (email) {
    return /\S+@\S+\.\S+/.test(email) //Test si l'email est dans le format *****@*****.****
}
function subscribeButton () {
    var email = document.getElementById('email').value;
    if (isEmailRightSpelled(email)) {
        addAlert("Vous vous êtes inscrit avec : \"" + email + "\"");
    } else {
        addAlert("L’adresse mail est erronée.");
    }
}
function addAlert(alertmsg) { //fonction qui permet de cree l'alerte personnalisable
    const alert = document.createElement("div");
    const msg = document.createTextNode(alertmsg);
    alert.append(msg);
    const header = document.getElementsByTagName("header")[0];
    document.body.insertBefore(alert, header);
    alert.className = ("index-alert");
    setTimeout(function () {
        alert.className = ("index-alert-active index-alert");
        setTimeout(function(){
            alert.className = ("index-alert-leaving index-alert");
            setTimeout(function(){
                document.getElementsByClassName("index-alert-leaving index-alert")[0].remove(); // on retire le premier element appellée
            }, 400); // j'ai mis 4 seconde comme ceci l'animation a une marge de timeout
        }, 2000);
    },1)


}
