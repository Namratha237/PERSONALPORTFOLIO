document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(pupil => {
        const rect = pupil.parentElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = 8; 
        pupil.style.left = (rect.width/2 - pupil.offsetWidth/2 + Math.cos(angle) * distance) + 'px';
        pupil.style.top = (rect.height/2 - pupil.offsetHeight/2 + Math.sin(angle) * distance) + 'px';
    });
});