// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dark Mode Toggle (Optional)
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Example of adding a button for dark mode toggle
const darkModeButton = document.createElement('button');
darkModeButton.innerText = 'Toggle Dark Mode';
darkModeButton.style.position = 'fixed';
darkModeButton.style.top = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.padding = '10px';
darkModeButton.style.backgroundColor = '#ff4081';
darkModeButton.style.color = '#ffffff';
darkModeButton.style.border = 'none';
darkModeButton.style.borderRadius = '5px';
darkModeButton.style.cursor = 'pointer';
darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);
