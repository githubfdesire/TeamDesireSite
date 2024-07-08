document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Show the home section by default
    document.getElementById('home').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.classList.remove('hidden');
                    setTimeout(() => {
                        section.style.display = 'block';
                    }, 500); // Match with CSS transition duration
                } else {
                    section.classList.remove('active');
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 500); // Match with CSS transition duration
                }
            });
        });
    });

    // Apply fadeIn animation on section change
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            targetSection.classList.remove('hidden');
            setTimeout(() => {
                targetSection.classList.add('active');
            }, 50); // Delay to allow CSS changes
        });
    });
});
