const contactForm = document.querySelector(".contact-form");
const user_name = document.querySelector("#user_name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const user_name_error = document.querySelector("#user_name_error");
const email_error = document.querySelector("#email_error");
const subject_error = document.querySelector("#subject_error");
const message_error = document.querySelector("#message_error");

contactForm.addEventListener('submit', (e) => {
    user_name_error.innerHTML = "";
    email_error.innerHTML = "";
    subject_error.innerHTML = "";
    message_error.innerHTML = "";
    let valid = true;
    e.preventDefault();

    const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (user_name.value === '' || user_name.value === null) {
        user_name_error.innerHTML = "\*Name is required";
        valid = false;
    }
    if (!email.value.match(email_check)) {
        email_error.innerHTML = "\*Valid email is required";
        valid = false;
    }
    if (subject.value === '' || subject.value === null) {
        subject_error.innerHTML = "\*Subject is required";
        valid = false;
    }
    if (message.value === '' || message.value === null) {
        message_error.innerHTML = "\*Message is required";
        valid = false;
    }

    if (valid) {
        // Use the new service ID in the emailjs.send method
        emailjs.send("service_2kd722q", "template_02pl74v", {
            from_name: user_name.value,
            from_email: email.value,
            subject: subject.value,
            message: message.value
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
            contactForm.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert("Message failed to send. Please try again later.");
        });
    }
});
