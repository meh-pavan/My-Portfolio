// Navigation scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // Update theme toggle icon with rotation
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.style.transform = 'rotate(360deg)';
    themeIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    
    // Reset rotation after animation
    setTimeout(() => {
        themeIcon.style.transform = '';
    }, 500);
}

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

// Set initial theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('.theme-toggle i').className = 'fas fa-moon';
    } else {
        document.querySelector('.theme-toggle i').className = 'fas fa-sun';
    }
});

// Contact Form Handling
function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format the email body
    const body = `Name: ${name}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Create the mailto link
    const mailtoLink = `mailto:pavan.macha46@gmail.com?subject=Portfolio Contact Form&body=${body}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Clear form
    document.getElementById('contact-form').reset();
    
    return false;
}

const contactForm = document.getElementById('contact-form');
contactForm.onsubmit = sendEmail;

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
