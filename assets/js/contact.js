(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "GU5QkrwsLx-ZdzUjc",
    });
})();



window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service_id', 'template_yawx4mn', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}