// Select the checkbox and listen for changes
const toggleSwitch = document.getElementById('darkModeToggle');

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Event listener to toggle dark mode
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');

    // Save the user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
