document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    // Toggle the menu visibility
    menuToggle.addEventListener('click', function() {
        menu.style.display = 'block';
    });

    // Close the menu when the close icon is clicked
    menuClose.addEventListener('click', function() {
        menu.style.display = 'none';
    });

    // Optional: Close the menu if clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target !== menu && event.target !== menuToggle && event.target !== menuClose) {
            menu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded',  function() {
    const emailInput = document.getElementById('email');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const textPop = document.getElementById('textPop');

    subscribeBtn.addEventListener('click', function() {
        const emailValue = emailInput.value;
        if (validateEmail(emailValue)) {
            textPop.style.display = 'block';
            textPop.textContent = 'You are subscribed Stay tuned for updates (change).';
            textPop.style.color = '#21EBBA';
        } else {
            textPop.style.display = 'block';
            textPop.textContent = 'Please enter a valid email address';
            textPop.style.color = 'red';
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
