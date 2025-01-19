const emailPublicKey = "AWQmwtMwdZpw11Saa111";
const formID = "contact_service_id";
const templateID = "template_yawx4mn";


let contactForm;
let successMessage;
let loaderImage;


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: emailPublicKey,
    });
})();



let displaySuccessMessage = function (){
    contactForm = document.getElementById('contact-form');
    successMessage = document.getElementById('success_message');
    loaderImage = document.getElementById('loader-image');
    contactForm.style.display = 'none';
    loaderImage.style.display = 'block';

    // after 2 secs hide loading animation and display message.
    setTimeout(function (){
        loaderImage.style.display = 'none';
        successMessage.style.display = 'block';
    }, 2000);
}



window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm(formID, templateID, this)
            .then((e) => {
                console.log(e);
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