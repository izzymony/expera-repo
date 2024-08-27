cument.addEventListener('DOMContentLoaded', function() {
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