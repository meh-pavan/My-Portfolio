// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use default light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        // Ensure light theme is applied (default)
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Update icon and save preference
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
    
    // Adjust layout on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hidden').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, message });
            
            // Reset form
            contactForm.reset();
            
            // Show success message (you can replace this with a proper UI notification)
            alert('Message sent successfully!');
        });
    }
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

// Add this to your existing script.js file

// Footer icon effects
document.addEventListener('DOMContentLoaded', function() {
    const footerIcons = document.querySelectorAll('.footer-icon');
    
    footerIcons.forEach(icon => {
        // Add click sound effect (optional)
        icon.addEventListener('click', function() {
            // Create a subtle click sound
            const clickSound = new Audio();
            clickSound.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwMD09PT09PUxMTExMWFhYWFhYZGRkZGRkcHBwcHB8fHx8fHyIiIiIiJSUlJSUlKCgoKCgrKysrKysuLi4uLjEyMjIyMjU1NTU1NTg4ODg4ODw8PDw8PD8/Pz8/P4AAAAAOUlBVE0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
            clickSound.volume = 0.2; // Adjust volume (0.0 to 1.0)
            clickSound.play().catch(e => {
                // Autoplay might be blocked, that's okay
                console.log("Audio play prevented:", e);
            });
            
            // Add a class for additional animation
            this.classList.add('clicked');
            
            // Remove the class after animation completes
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});

// Add this to your existing script.js file
// Skill cards interaction
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        // Add a subtle animation when hovering over skill cards
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease';
        });
        
        // Add a click effect
        card.addEventListener('click', function() {
            // Show the tooltip text in a more prominent way
            const tooltipText = this.getAttribute('data-tooltip');
            
            // Create or update a toast notification
            let toast = document.getElementById('skill-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'skill-toast';
                document.body.appendChild(toast);
            }
            
            // Set toast content and show it
            toast.textContent = tooltipText;
            toast.className = 'show-toast';
            
            // Hide the toast after 2 seconds
            setTimeout(() => {
                toast.className = toast.className.replace('show-toast', '');
            }, 2000);
            
            // Add a quick pulse animation
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 300);
            
            // Highlight the label
            const label = this.querySelector('.skill-label');
            if (label) {
                label.style.fontWeight = '700';
                label.style.color = 'var(--primary-color)';
                
                setTimeout(() => {
                    label.style.fontWeight = '';
                    label.style.color = '';
                }, 500);
            }
        });
    });
});

// Add this to your existing script.js file

// Resume download button enhancement
document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.querySelector('.resume-button');
    
    if (resumeButton) {
        resumeButton.addEventListener('click', function(e) {
            // Track resume download (you can replace this with actual analytics code)
            console.log('Resume downloaded');
            
            // Add a visual feedback when clicked
            this.classList.add('clicked');
            
            // Create a toast notification
            let toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = 'Resume download started!';
            document.body.appendChild(toast);
            
            // Show the toast
            setTimeout(() => {
                toast.classList.add('show-toast');
            }, 10);
            
            // Remove the toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show-toast');
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
            
            // Remove the clicked class after animation completes
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    }
});
