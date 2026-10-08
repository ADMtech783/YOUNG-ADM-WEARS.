document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // CART ENGINE
  // ============================================
  const CART_STORAGE_KEY = 'young-adm-cart';

  function getCart() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Could not read cart:', err);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Could not save cart:', err);
    }
  }

  function addToCart(product) {
    const cart = getCart();
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price || 0, quantity: 1 });
    }
    saveCart(cart);
    updateCartCount();
  }

  function getCartCount() {
    return getCart().reduce((total, item) => total + item.quantity, 0);
  }

  function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = getCartCount();
  }

  function buildWhatsAppCheckoutMessage() {
    const cart = getCart();
    if (cart.length === 0) return '';
    const lines = cart.map((item) => `- ${item.name} x${item.quantity} (₦${(item.price * item.quantity).toLocaleString()})`);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = `Hi, I'd like to order:\n${lines.join('\n')}\n\nTotal: ₦${total.toLocaleString()}`;
    return encodeURIComponent(message);
  }

  updateCartCount();

  document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('[data-product-id]');
      if (!card) return;
      addToCart({
        id: card.dataset.productId,
        name: card.dataset.productName,
        price: Number(card.dataset.productPrice) || 0
      });
      const originalText = btn.textContent;
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.textContent = originalText; }, 1200);
    });
  });

  // ============================================
  // NAV TOGGLE
  // ============================================
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  function openMobileNav() {
    if (mobileNav) mobileNav.classList.add('open');
  }
  function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove('open');
  }

  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // ============================================
  // FAQ ACCORDION
  // ============================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((other) => {
        other.classList.remove('active');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ============================================
  // VIEW MORE
  // ============================================
  document.querySelectorAll('.view-more-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const gridId = btn.dataset.target;
      const grid = document.getElementById(gridId);
      if (!grid) return;
      const hiddenItems = grid.querySelectorAll('.extra-item.hidden');
      hiddenItems.forEach((item) => item.classList.remove('hidden'));
      btn.style.display = 'none';
    });
  });

  // ============================================
  // PHOTO LIGHTBOX
  // ============================================
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    if (lightboxOverlay) lightboxOverlay.classList.add('open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    if (lightboxOverlay) lightboxOverlay.classList.remove('open');
  }

  document.querySelectorAll('.product-photo').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
  if (lightboxImg) lightboxImg.addEventListener('click', closeLightbox);

  // ============================================
  // CART PANEL (dropdown)
  // ============================================
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartPanel = document.getElementById('cart-panel');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartPanelItems = document.getElementById('cart-panel-items');
  const cartCheckoutBtn = document.getElementById('cart-checkout-btn');

  function renderCartPanel() {
    if (!cartPanelItems) return;
    const cart = getCart();

    if (cart.length === 0) {
      cartPanelItems.innerHTML = '<p class="cart-empty-msg">Your cart is empty.</p>';
      if (cartCheckoutBtn) cartCheckoutBtn.style.display = 'none';
      return;
    }

    cartPanelItems.innerHTML = cart.map((item) => `
      <div class="cart-item" data-id="${item.id}">
        <div>
          <span class="cart-item-name">${item.name}</span><br>
          <span class="cart-item-price">₦${(item.price * item.quantity).toLocaleString()}</span>
        </div>
        <div class="cart-item-qty">
          <button class="cart-qty-minus" data-id="${item.id}">−</button>
          <span>${item.quantity}</span>
          <button class="cart-qty-plus" data-id="${item.id}">+</button>
        </div>
      </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartPanelItems.innerHTML += `<div class="cart-total"><span>Total</span><span>₦${total.toLocaleString()}</span></div>`;

    if (cartCheckoutBtn) {
      cartCheckoutBtn.style.display = 'block';
      const message = buildWhatsAppCheckoutMessage();
      cartCheckoutBtn.href = `https://wa.me/2348126966400?text=${message}`;
    }

    cartPanelItems.querySelectorAll('.cart-qty-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cart = getCart();
        const item = cart.find((i) => i.id === btn.dataset.id);
        if (item) {
          item.quantity += 1;
          saveCart(cart);
          updateCartCount();
          renderCartPanel();
        }
      });
    });

    cartPanelItems.querySelectorAll('.cart-qty-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cart = getCart();
        const item = cart.find((i) => i.id === btn.dataset.id);
        if (item) {
          item.quantity -= 1;
          const updatedCart = item.quantity <= 0
            ? cart.filter((i) => i.id !== btn.dataset.id)
            : cart;
          saveCart(updatedCart);
          updateCartCount();
          renderCartPanel();
        }
      });
    });
  }

  function openCartPanel() {
    if (!cartPanel) return;
    renderCartPanel();
    cartPanel.classList.add('open');
  }

  function closeCartPanel() {
    if (!cartPanel) return;
    cartPanel.classList.remove('open');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartPanel);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartPanel);

  // ============================================
  // GALLERY (data-driven)
  // ============================================
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid && typeof galleryItems !== 'undefined') {
    galleryItems.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.dataset.productId = item.id;
      card.dataset.productName = item.name;
      card.dataset.productPrice = item.price || 0;

      const price = Number(item.price) || 0;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy" class="gallery-photo" />
        <div class="gallery-card-overlay">
          <span class="gallery-card-name">${item.name}</span>
          <span class="gallery-card-price">₦${price.toLocaleString()}</span>
          <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
        </div>
      `;

      galleryGrid.appendChild(card);
    });

    galleryGrid.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('[data-product-id]');
        if (!card) return;
        addToCart({
          id: card.dataset.productId,
          name: card.dataset.productName,
          price: Number(card.dataset.productPrice) || 0
        });
        const originalText = btn.textContent;
        btn.textContent = 'Added ✓';
        setTimeout(() => { btn.textContent = originalText; }, 1200);
      });
    });

    galleryGrid.querySelectorAll('.gallery-photo').forEach((img) => {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });
  }

});
