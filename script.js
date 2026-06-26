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


































function getCart() {
  // Retrieve cart from localStorage or return empty array
  const cart = localStorage.getItem("wittymart_cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  // Save cart array to localStorage
  localStorage.setItem("wittymart_cart", JSON.stringify(cart));
}

function addToCart(productName, price, imgSrc) {
  const cart = getCart();
  const existing = cart.find((item) => item.name === productName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, img: imgSrc, quantity: 1 });
  }
  saveCart(cart);
  alert(`${productName} added to cart.`);
}

// Render cart items on cart.html
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElem = document.getElementById("cart-total");
  if (!cartContainer || !totalElem) return;

  const cart = getCart();
  cartContainer.innerHTML = ""; // Clear
  let total = 0;

  cart.forEach((item) => {
    // Create cart-item div
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
        <div class="item-info">
          <img src="${item.img}" alt="${item.name}" />
          <span class="item-name">${item.name}</span>
        </div>
        <div class="item-controls">
          <span class="item-price">Ksh ${item.price.toLocaleString()}</span>
          <input type="number" class="qty-input" data-product="${
            item.name
          }" value="${item.quantity}" min="1">
          <button class="remove-btn" data-product="${item.name}">Remove</button>
        </div>
      `;
    cartContainer.appendChild(div);

    total += item.price * item.quantity;
  });

  totalElem.textContent = total.toLocaleString();

  // Attach event listeners for quantity changes and remove buttons
  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const name = e.target.dataset.product;
      let qty = parseInt(e.target.value);
      if (qty < 1) qty = 1;
      updateQuantity(name, qty);
      renderCart();
    });
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const name = e.target.dataset.product;
      removeFromCart(name);
      renderCart();
    });
  });
}

function updateQuantity(productName, quantity) {
  const cart = getCart();
  const item = cart.find((i) => i.name === productName);
  if (item) item.quantity = quantity;
  saveCart(cart);
}

function removeFromCart(productName) {
  let cart = getCart();
  cart = cart.filter((i) => i.name !== productName);
  saveCart(cart);
}

// FAQ toggle for about.html
function toggleFAQ(btn) {
  const answer = btn.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// Newsletter subscription handler for index.html
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      if (email) {
        alert(`Thanks for subscribing: ${email}`);
        newsletterForm.reset();
      } else {
        alert("Please enter a valid email.");
      }
    });
  }

  // Attach add-to-cart buttons on shop.html
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productName = btn.dataset.product;
      const priceText = btn.previousElementSibling.textContent.replace(
        /[^\d.]/g,
        ""
      );
      const price = parseFloat(priceText);
      const imgSrc = btn.parentElement.querySelector("img").src;
      addToCart(productName, price, imgSrc);
    });
  });

  // If on cart page, render cart
  if (document.getElementById("cart-items")) {
    renderCart();
  }

  // Contact form handling in contact.html
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.querySelector("#name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const message = contactForm.querySelector("#message").value.trim();
      const status = document.getElementById("form-status");
      if (name && email && message) {
        status.textContent = `Thank you for contacting us ${name}! We'll get back to you soon.`;
        status.style.color = "#f5f5f5";
        status.style.fontWeight = "bold";
        status.style.backgroundColor = "green";
        status.style.padding = "20px";
        status.style.borderRadius = "5px";
        contactForm.reset();
      } else {
        status.textContent = "Please fill out all fields.";
        status.style.color = "red";
      }
    });
  }

  // ===== HERO SLIDER FUNCTIONALITY =====

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const slideWrapper = document.querySelector(".slides");

  function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Auto-advance every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);


  

  // ===== FORM VALIDATION (Newsletter & Contact) =====
  function attachValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    const errorEl = document.createElement("div");
    errorEl.className = "form-error";
    form.appendChild(errorEl);

    form.addEventListener("submit", (e) => {
      let valid = true;
      errorEl.textContent = "";
      form
        .querySelectorAll("input[required], textarea[required]")
        .forEach((field) => {
          if (!field.checkValidity()) {
            valid = false;
            const label =
              form.querySelector(`label[for="${field.id}"]`)?.textContent ||
              "Field";
            errorEl.textContent = `Please enter a valid ${label.toLowerCase()}.`;
          }
        });
      if (!valid) e.preventDefault();
    });
  }
  // initialize on DOM load
  attachValidation("newsletter-form");
  attachValidation("newsletter-form"); // newsletter on index.html
  attachValidation("contact-form"); // contact.html
});
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  function togglemenu() {
    document.getElementById('main-nav').classList.add('show');
    document.querySelector('.menu-toggle').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'inline-block';
  }
  
  function closemenu() {
    document.getElementById('main-nav').classList.remove('show');
    document.querySelector('.menu-toggle').style.display = 'inline-block';
    document.querySelector('.close-btn').style.display = 'none';
  }
 
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function updateSlider() {
  const offset = -currentSlide * 100;
  track.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

// Auto-slide every 6 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}, 6000);
