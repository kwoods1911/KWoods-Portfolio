const emailPublicKey = "AWQmwtMwdZpw11Saa";
const formID = "contact_service_id";
const templateID = "template_yawx4mn";


let contactForm;
let successMessage;


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: emailPublicKey,
    });
})();



let displaySuccessMessage = function (){
    contactForm = document.getElementById('contact-form');
    successMessage = document.getElementById('success_message');
    contactForm.style.display = 'none';
    successMessage.style.display = 'block';

    //display hidden success message
}



window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm(formID, templateID, this)
            .then(() => {
                console.log('SUCCESS!');
                // display message to user.
                // show loading message.
                //display success message to user.
                displaySuccessMessage();
            }, (error) => {
                console.log('FAILED...', error);
                // display error to screen.
            });
    });
}