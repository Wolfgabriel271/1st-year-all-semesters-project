const btn = document.getElementById('theme-btn');
const contactForm = document.getElementById('contact-form');
const responseMsg = document.getElementById('form-response');

// Check if button exists before adding listener
if (btn) {
    btn.addEventListener('click', function() {
        document.body.classList.toggle('theme1');
        
        if (document.body.classList.contains('theme1')) {
            btn.textContent = "Light Mode";
        } else {
            btn.textContent = "Dark Mode";
        }
    });
}

// Check if form exists before adding listener
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('user-name');
        const name = nameInput.value;
        
        if (responseMsg) {
            responseMsg.textContent = "Thank you, " + name + "! Your message was sent.";
        }
        
        contactForm.reset();
    });
}