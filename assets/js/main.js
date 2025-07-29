// Main JavaScript file for Rubies Micro Insurance website

// Testimonials carousel functionality
function scrollTestimonials(direction) {
    const carousel = document.getElementById('testimonials-carousel');
    const scrollAmount = 320; // Width of one testimonial card plus gap

    if (direction === 'left') {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}



// Auto-scroll testimonials every 5 seconds
function autoScrollTestimonials() {
    const carousel = document.getElementById('testimonials-carousel');
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        scrollTestimonials('right');
    }
}

// Initialize auto-scroll for testimonials
let testimonialInterval;

function startTestimonialAutoScroll() {
    testimonialInterval = setInterval(autoScrollTestimonials, 5000);
}

function stopTestimonialAutoScroll() {
    clearInterval(testimonialInterval);
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Mobile products dropdown functionality
function toggleMobileProducts() {
    const productsMenu = document.getElementById('mobile-products-menu');
    const productsIcon = document.getElementById('mobile-products-icon');

    if (productsMenu && productsIcon) {
        productsMenu.classList.toggle('hidden');
        productsIcon.classList.toggle('rotate-180');
    }
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form validation (for future contact forms)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Loading animation for buttons
function showButtonLoading(buttonElement) {
    const originalText = buttonElement.textContent;
    buttonElement.textContent = 'Loading...';
    buttonElement.disabled = true;

    // Restore button after 2 seconds (simulate API call)
    setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.disabled = false;
    }, 2000);
}

// Handle product clicks to redirect to claims page
function handleProductClick(productName) {
    // Store the selected product in sessionStorage for the claims page
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('selectedProduct', productName);
    }

    // Redirect to claims page
    window.location.href = 'claims.html';
}

// Handle FAQ toggle functionality
function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (content && icon) {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.textContent = '−';
        } else {
            content.classList.add('hidden');
            icon.textContent = '+';
        }
    }
}

// Track form submissions
function trackFormSubmission(formType) {
    // This could be used for analytics
    console.log(`Form submitted: ${formType}`);

    // You could send this data to your analytics service
    // gtag('event', 'form_submit', {
    //     'form_type': formType,
    //     'timestamp': new Date().toISOString()
    // });
}

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    // Start testimonial auto-scroll if carousel exists
    const testimonialCarousel = document.getElementById('testimonials-carousel');
    if (testimonialCarousel) {
        startTestimonialAutoScroll();

        // Pause auto-scroll when user hovers over testimonials
        testimonialCarousel.addEventListener('mouseenter', stopTestimonialAutoScroll);
        testimonialCarousel.addEventListener('mouseleave', startTestimonialAutoScroll);
    }

    // Add click handlers to CTA buttons
    const ctaButtons = document.querySelectorAll('button');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Get Started') || button.textContent.includes('Learn More')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showButtonLoading(this);

                // Redirect to claims page after loading
                setTimeout(() => {
                    window.location.href = 'claims.html';
                }, 2000);
            });
        }
    });

    // Handle product links in mega menu and product sections
    const productLinks = document.querySelectorAll('a[href="claims.html"]');
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get product name from the link's text content
            const productElement = this.querySelector('h4, h3');
            let productName = 'General Product';

            if (productElement) {
                productName = productElement.textContent.trim();
            }

            handleProductClick(productName);
        });
    });

    // Pre-fill claims form if product was selected
    if (window.location.pathname.includes('claims.html')) {
        const selectedProduct = sessionStorage.getItem('selectedProduct');
        const claimTypeSelect = document.querySelector('select[class*="claim"]');

        if (selectedProduct && claimTypeSelect) {
            // Try to find matching option
            const options = claimTypeSelect.querySelectorAll('option');
            options.forEach(option => {
                if (option.textContent.includes(selectedProduct) || selectedProduct.includes(option.textContent)) {
                    option.selected = true;
                }
            });

            // Clear the stored product after using it
            sessionStorage.removeItem('selectedProduct');
        }
    }

    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Determine form type
            let formType = 'contact';
            if (form.querySelector('select[class*="claim"]')) {
                formType = 'claim';
            }

            // Track submission
            trackFormSubmission(formType);

            // Show success message
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                showButtonLoading(submitButton);

                setTimeout(() => {
                    alert(`Thank you! Your ${formType} has been submitted successfully. We'll get back to you soon.`);
                    form.reset();
                }, 2000);
            }
        });
    });

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle file upload visual feedback
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        const dropZone = input.closest('.border-dashed');

        if (dropZone) {
            // Handle drag and drop
            dropZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('border-pink-500', 'bg-pink-50');
            });

            dropZone.addEventListener('dragleave', function(e) {
                e.preventDefault();
                this.classList.remove('border-pink-500', 'bg-pink-50');
            });

            dropZone.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('border-pink-500', 'bg-pink-50');

                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    input.files = files;
                    updateFileDisplay(input, files);
                }
            });

            // Handle click to select files
            dropZone.addEventListener('click', function() {
                input.click();
            });

            // Handle file selection
            input.addEventListener('change', function(e) {
                const files = e.target.files;
                updateFileDisplay(input, files);
            });
        }
    });

    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Update file display for drag and drop
function updateFileDisplay(input, files) {
    const dropZone = input.closest('.border-dashed');
    if (!dropZone) return;

    const fileList = Array.from(files).map(file => file.name).join(', ');
    const existingText = dropZone.querySelector('p');

    if (existingText && files.length > 0) {
        existingText.innerHTML = `<strong>Selected files:</strong><br>${fileList}`;
        existingText.classList.add('text-green-600');
    }
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Adjust testimonial carousel if needed
    const carousel = document.getElementById('testimonials-carousel');
    if (carousel) {
        // Reset scroll position on resize
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }
});

// Utility function to detect mobile devices
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Handle touch events for mobile testimonial swiping
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const carousel = document.getElementById('testimonials-carousel');
    if (!carousel) return;

    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - scroll right
            scrollTestimonials('right');
        } else {
            // Swipe right - scroll left
            scrollTestimonials('left');
        }
    }
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Handle navigation active states
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[href]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.style.color = '#CB4662';

            // Add active underline
            const existingUnderline = link.querySelector('div');
            if (!existingUnderline) {
                const underline = document.createElement('div');
                underline.className = 'absolute -bottom-1 left-0 w-full h-0.5 rounded-full';
                underline.style.backgroundColor = '#CB4662';
                link.appendChild(underline);
                link.style.position = 'relative';
            }
        }
    });
}

// Set active navigation on page load
document.addEventListener('DOMContentLoaded', setActiveNavigation);

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('JavaScript error caught:', e.error);
    // Could send error reports to monitoring service
});

// Export functions for global use
window.scrollTestimonials = scrollTestimonials;
window.toggleFAQ = toggleFAQ;
window.handleProductClick = handleProductClick;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleMobileProducts = toggleMobileProducts;
