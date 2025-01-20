const emailPublicKey = "AWQmwtMwdZpw11Saa11";
const formID = "contact_service_id";
const templateID = "template_yawx4mn";


let contactForm = document.getElementById('contact-form');
let successMessage = document.getElementById('success_message');
let errorMessage = document.getElementById('error_message');
let loaderImage = document.getElementById('loader-image');


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: emailPublicKey,
    });
})();



let displaySuccessMessage = function (){
    contactForm.style.display = 'none';
    loaderImage.style.display = 'block';

    // after 2 secs hide loading animation and display message.
    setTimeout(function (){
        loaderImage.style.display = 'none';
        successMessage.style.display = 'block';
    }, 2000);
}

let displayErrorMessage = function(){
    contactForm.style.display = 'none';
    loaderImage.style.display = 'block';

    // display error message
      // after 2 secs hide loading animation and display message.
      setTimeout(function (){
        loaderImage.style.display = 'none';
        errorMessage.style.display = 'block';
    }, 2000);
}



window.onload = function() {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm(formID, templateID, this)
            .then((e) => {
                console.log('SUCCESS!');
                displaySuccessMessage();

            }, (error) => {
                console.log('FAILED...', error);
                displayErrorMessage();
            });
    });
}