document.addEventListener('DOMContentLoaded', function() {
    // Génération du captcha avec une opération simple
    var captcha1 = Math.floor(Math.random() * 10) + 1;
    var captcha2 = Math.floor(Math.random() * 10) + 1;
    var captchaOperation = captcha1 + ' + ' + captcha2 + ' = ?';

    document.getElementById('captcha-operation').textContent = captchaOperation;

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var captchaResponse = document.getElementById('captcha').value;

        // Vérification du captcha
        if (parseInt(captchaResponse) === captcha1 + captcha2) {
            // Formulaire valide, afficher le message de confirmation
            document.getElementById('message-sent').style.display = 'block';
            document.getElementById('contact-form').reset(); // Réinitialise le formulaire
        } else {
            alert('Captcha incorrect !');
        }
    });

    // Génération d'un nouveau captcha lorsque le bouton "Régénérer" est cliqué
    document.getElementById('regenerate-captcha').addEventListener('click', function() {
        captcha1 = Math.floor(Math.random() * 10) + 1;
        captcha2 = Math.floor(Math.random() * 10) + 1;
        var newCaptchaOperation = captcha1 + ' + ' + captcha2 + ' = ?';
        document.getElementById('captcha-operation').textContent = newCaptchaOperation;
    });
});
