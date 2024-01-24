document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Check the user's preference from local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set the initial mode
    setMode(isDarkMode);
});


function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : null);
}

