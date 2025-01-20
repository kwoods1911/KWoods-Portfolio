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
let character_count = document.getElementById('character_count');

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

    message.addEventListener('input', function(event){
        let count = message.value.length;
        character_count.innerText = 1000 - count;

        if(character_count.innerText <= 0){
            message.value = message.value.subtring(0, 1000);
        } 
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //perform form validation
     

        if(!client_name.value){
            error_validation_message.innerText = 'Name field required !';
            client_name.style.border = '1px solid #fc544b';
            return;
        } 

        if(!email.value){
            error_validation_message.innerText = 'Email is required !';
            email.style.border = '1px solid #fc544b';
            return;
        } 

        if(!message.value){
            error_validation_message.innerText = 'A message is required !';
            message.style.border = '1px solid #fc544b';
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