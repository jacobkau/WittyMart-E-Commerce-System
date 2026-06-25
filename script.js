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
  function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
  
    body.classList.toggle('dark-theme');
  
    // Update icon and localStorage
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      localStorage.setItem('theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌞';
    }
  }
  
  // Apply saved theme on load
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
  
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      if (themeIcon) themeIcon.textContent = '🌞';
    }
  });
  // JavaScript
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
