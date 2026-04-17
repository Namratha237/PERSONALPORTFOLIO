let currentSection = 0;
const sections = document.querySelectorAll('.panel');

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        currentSection = (currentSection + 1) % sections.length;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
});
