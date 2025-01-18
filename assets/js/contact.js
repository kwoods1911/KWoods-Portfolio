const emailPublicKey = "AWQmwtMwdZpw11Saa";
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

    // display loading animation for a period of time.
    setTimeout(function (){
        loaderImage.style.display = 'none';
        //display hidden success message
        successMessage.style.display = 'block';
    }, 2000);
    // after 2 seconds 
    //hide image

    
    
    

    
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