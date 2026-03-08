document.addEventListener('DOMContentLoaded', () => {
    /* ===== Intersection Observer for Fade-Up Animations ===== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    /* ===== Navbar Scroll Effect ===== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ===== Countdown Timer ===== */
    // Set launch date to 19 March 2026
    const launchDate = new Date('March 19, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "Launched!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    /* ===== Signup Form Logic ===== */
    const signupForm = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');
    const notifyBtn = document.getElementById('notifyBtn');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Animation for the button
            const btnText = notifyBtn.querySelector('.btn-text');
            const originalText = btnText.innerText;
            btnText.innerText = 'Subscribing...';
            notifyBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                signupForm.style.display = 'none';
                successMessage.classList.add('show');

                // Track "event" (mock)
                console.log('User subscribed:', document.getElementById('emailInput').value);
            }, 1200);
        });
    }

    /* ===== Hover Micro-interactions ===== */
    const cards = document.querySelectorAll('.feature-card, .social-card, .countdown-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle tilt or scale if desired here
        });
    });
});
