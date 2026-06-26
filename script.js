// Enhanced Theme Toggle with Sun/Moon Icons
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    // Animated icon transition
    icon.style.transition = 'transform 0.3s ease';
    icon.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
        if (body.classList.contains('dark-mode')) {
            icon.innerHTML = '<i class="fas fa-moon"></i>';
            icon.title = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.innerHTML = '<i class="fas fa-sun"></i>';
            icon.title = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        }
        icon.style.transform = 'rotate(0deg)';
    }, 150);
}

// Detect system preference
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Load theme with system preference fallback
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = getSystemTheme();
    const theme = savedTheme || systemTheme;
    const icon = document.getElementById('theme-icon');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.innerHTML = '<i class="fas fa-moon"></i>';
        icon.title = 'Switch to Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        icon.innerHTML = '<i class="fas fa-sun"></i>';
        icon.title = 'Switch to Dark Mode';
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            const icon = document.getElementById('theme-icon');
            if (newTheme === 'dark') {
                document.body.classList.add('dark-mode');
                icon.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.body.classList.remove('dark-mode');
                icon.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    });
});

// ==== HOME PAGE ==== //
     function toggleMenu() {
            const nav = document.getElementById('main-nav');
            nav.classList.toggle('show');
        }

          // Sidebar Toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.getElementById('main-nav').classList.remove('show');
        }

        // Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('#heroSlides .slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            const offset = -index * 100;
            document.getElementById('heroSlides').style.transform = `translateX(${offset}%)`;
            currentSlide = index;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Auto slide
        setInterval(nextSlide, 5000);

        // Testimonial Slider
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('#testimonialTrack .slide1');
        const totalTestimonials = testimonials.length;

        function showTestimonial(index) {
            if (index < 0) index = totalTestimonials - 1;
            if (index >= totalTestimonials) index = 0;
            const offset = -index * 100;
            document.getElementById('testimonialTrack').style.transform = `translateX(${offset}%)`;
            currentTestimonial = index;
        }

        function nextTestimonial() {
            showTestimonial(currentTestimonial + 1);
        }

        function prevTestimonial() {
            showTestimonial(currentTestimonial - 1);
        }

        // Auto testimonial slide
        setInterval(nextTestimonial, 6000);
 // Newsletter Form
        document.getElementById('newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! You will receive updates from WittyMart.');
                this.querySelector('input[type="email"]').value = '';
            }
        });

        // Show Page Function
        function showPage(pageId) {
            // Hide all subpages
            var pages = document.querySelectorAll('.subpage');
            pages.forEach(function(page) {
                page.classList.remove('active');
            });

            // Remove active class from all nav links
            var links = document.querySelectorAll('.subnav a');
            links.forEach(function(link) {
                link.classList.remove('active-link');
            });

            // Show the clicked subpage
            var selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
            }

            // Add active class to clicked nav link
            var activeLink = document.getElementById(pageId + 'Link');
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }

        // Default: Show Privacy Policy page on initial load
        showPage('privacy');

        // Close sidebar on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const sidebar = document.getElementById('sidebar');
                const overlay = document.getElementById('sidebarOverlay');
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                }
            }
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                document.getElementById('main-nav').classList.remove('show');
            }
        });


/* === REGISTRATION AND LOGIN PAGES === */
 const signupForm = document.getElementById('signupForm');
        const loginForm = document.getElementById('loginForm');
        const togglePassword = document.getElementById('togglePassword');
        const toggleLoginPassword = document.getElementById('toggleLoginPassword');
        const passwordInput = document.getElementById('password');
        const loginPasswordInput = document.getElementById('loginPassword');
        const message = document.getElementById('message');
        const modal = document.getElementById('confirmModal');
        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        const progressBar = document.getElementById('progressBar');
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        const formTitle = document.getElementById('formTitle');
        const switchToLogin = document.getElementById('switchToLogin');
        const switchToRegister = document.getElementById('switchToRegister');

        // Theme
        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            const icon = themeToggleBtn.querySelector('i');
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                icon.className = 'fas fa-moon';
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
        }

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });

        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
        });

        // Toggle password visibility
        togglePassword.addEventListener('click', () => {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
            togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
        });

        toggleLoginPassword.addEventListener('click', () => {
            loginPasswordInput.type = loginPasswordInput.type === 'password' ? 'text' : 'password';
            toggleLoginPassword.textContent = loginPasswordInput.type === 'password' ? 'Show' : 'Hide';
        });

        // Register form submission
        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (username.length < 3) return showMessage("Username must be at least 3 characters", 'error');
            if (!validateEmail(email)) return showMessage("Invalid email format", 'error');
            if (password.length < 6) return showMessage("Password must be at least 6 characters", 'error');
            if (password !== confirmPassword) return showMessage("Passwords do not match", 'error');

            modal.style.display = "block";
        });

        // Login form submission
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = loginPasswordInput.value.trim();

            if (!validateEmail(email)) return showMessage("Invalid email format", 'error');
            if (password.length < 6) return showMessage("Password must be at least 6 characters", 'error');

            showMessage("Logging in...", "success");
            simulateProgressAndRedirect();
        });

        confirmBtn.addEventListener('click', () => {
            modal.style.display = "none";
            showMessage("Account created successfully!", "success");
            simulateProgressAndRedirect();
        });

        cancelBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });

        function simulateProgressAndRedirect() {
            let width = 0;
            progressBar.style.width = '0';
            const interval = setInterval(() => {
                width += 20;
                progressBar.style.width = width + '%';
                if (width >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        window.location.href = "welcome.html";
                    }, 500);
                }
            }, 300);
        }

        function validateEmail(email) {
            return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.toLowerCase());
        }

        function showMessage(text, type) {
            message.textContent = text;
            message.className = 'message ' + type;
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
            }, 5000);
        }

        // Toggle between login and register forms
        switchToLogin.addEventListener('click', () => {
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            formTitle.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login to Your Account';
            switchToLogin.classList.add('hidden');
            switchToRegister.classList.remove('hidden');
            message.style.display = 'none';
        });

        switchToRegister.addEventListener('click', () => {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            formTitle.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
            switchToLogin.classList.remove('hidden');
            switchToRegister.classList.add('hidden');
            message.style.display = 'none';
        });

        // Close modal on outside click
        window.onclick = e => {
            if (e.target === modal) modal.style.display = "none";
        };

        // Enter key support for form switching
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const activeForm = document.querySelector('form:not(.hidden)');
                if (activeForm) {
                    activeForm.dispatchEvent(new Event('submit'));
                }
            }
        });
/* === SHOP === */
 // Add to Cart functionality
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const product = this.getAttribute('data-product');
                alert(`${product} added to cart!`);
            });
        });

/* === CONTACT US PAGE ===*/
        function handleContactForm(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const status = document.getElementById('form-status');

            if (name && email && message) {
                status.className = 'form-status success';
                status.textContent = '✅ Thank you, ' + name + '! Your message has been sent successfully. We\'ll get back to you soon.';
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                status.className = 'form-status error';
                status.textContent = '❌ Please fill in all fields.';
            }
            return false;
        }

/* === CART PAGE === */
 // Update Quantity
        function updateQuantity(button, change) {
            const item = button.closest('.cart-item');
            const quantitySpan = item.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent) + change;
            if (quantity < 1) quantity = 1;
            quantitySpan.textContent = quantity;
            updateTotal();
        }

        // Remove Item
        function removeItem(button) {
            if (confirm('Remove this item from cart?')) {
                const item = button.closest('.cart-item');
                item.remove();
                updateTotal();
                checkEmptyCart();
            }
        }

        // Update Total
        function updateTotal() {
            const items = document.querySelectorAll('.cart-item');
            let total = 0;
            items.forEach(item => {
                const price = parseFloat(item.querySelector('.cart-item-price').textContent.replace('Ksh ', '').replace(/,/g, ''));
                const quantity = parseInt(item.querySelector('.quantity').textContent);
                total += price * quantity;
            });
            document.getElementById('cart-total').textContent = total.toLocaleString();
        }

        // Check Empty Cart
        function checkEmptyCart() {
            const items = document.querySelectorAll('.cart-item');
            const cartSection = document.querySelector('.cart');
            if (items.length === 0) {
                cartSection.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven't added any items yet.</p>
                        <a href="shop.html" class="shop-now">Start Shopping</a>
                    </div>
                `;
            }
        }

        // Checkout
        function checkout() {
            const total = document.getElementById('cart-total').textContent;
            alert(`Thank you for shopping with WittyMart!\nTotal: KES ${total}\nYour order has been placed successfully.`);
        }
/* === ABOUT PAGE === */
// FAQ Toggle
        function toggleFAQ(button) {
            const answer = button.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Close all FAQ answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('open');
            });
            document.querySelectorAll('.faq-question').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle the clicked one
            if (!isOpen) {
                answer.classList.add('open');
                button.classList.add('active');
            }
        }
































