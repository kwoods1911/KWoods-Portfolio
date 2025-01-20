const emailPublicKey = "AWQmwtMwdZpw11Saa";
const formID = "contact_service_id";
const templateID = "template_yawx4mn";


let contactForm = document.getElementById('contact-form');
let successMessage = document.getElementById('success_message');
let errorMessage = document.getElementById('error_message');
let loaderImage = document.getElementById('loader-image');


let client_name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


let error_validation_message = document.getElementById('validation_error_message');



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
        //perform form validation
        if(!email.value){
            error_validation_message.innerText = 'Email is required !';
            email
            return;
        } 

        if(!client_name.value){
            error_validation_message.innerText = 'Name field required !';
            return;
        } 

        if(!message.value){
            error_validation_message.innerText = 'A message is required !';
            return;
        } 

       
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