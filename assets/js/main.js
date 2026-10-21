/**
 * Honey Bee Beauty Hive (Spa & Facials) - Interactive Scripts
 * Benchmark: annie-aesthetics.netlify.app
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const menuToggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.querySelector('.mobile-drawer .overlay');

  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  }

  // 2. Header Scroll Effect
  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollPos > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Interactive Service Search Bar (Inspired by annie-aesthetics)
  const searchInput = document.getElementById('home-search');
  const searchResults = document.getElementById('home-search-results');

  const TREATMENTS_DATA = [
    { name: "Teeth Whitening (1 Session - 45 mins)", price: "₦30,000", url: "services.html#teeth", cat: "Teeth" },
    { name: "Teeth Whitening (2 Sessions)", price: "₦55,000", url: "services.html#teeth", cat: "Teeth" },
    { name: "Teeth Whitening (3 Sessions)", price: "₦80,000", url: "services.html#teeth", cat: "Teeth" },
    { name: "Teeth Scaling & Polishing", price: "₦20,000+", url: "services.html#teeth", cat: "Teeth" },
    { name: "Fashion Braces Installation", price: "₦40,000", url: "services.html#teeth", cat: "Teeth" },
    { name: "Tooth Gems Crystal Placement", price: "₦5,000+", url: "services.html#teeth", cat: "Teeth" },
    { name: "Essential Glow Facial", price: "₦20,000", url: "services.html#facials", cat: "Facials" },
    { name: "Brightening Derma-planning Facial", price: "₦25,000", url: "services.html#facials", cat: "Facials" },
    { name: "High Frequency Acne Facial", price: "₦30,000", url: "services.html#facials", cat: "Facials" },
    { name: "Acne Pro Clinical Facial", price: "₦40,000", url: "services.html#facials", cat: "Facials" },
    { name: "Microneedling Collagen Induction", price: "Consultation / Custom", url: "services.html#facials", cat: "Facials" },
    { name: "Brazilian / Hollywood Wax", price: "₦20,000", url: "services.html#waxing", cat: "Waxing" },
    { name: "Underarm Waxing", price: "₦8,000", url: "services.html#waxing", cat: "Waxing" },
    { name: "Full Body Wax", price: "₦80,000", url: "services.html#waxing", cat: "Waxing" },
    { name: "Full Body Wax & Vajacials", price: "₦90,000", url: "services.html#waxing", cat: "Waxing" },
    { name: "Vajacials / Brazilian Wax Combo", price: "₦30,000", url: "services.html#waxing", cat: "Waxing" },
    { name: "Beards & Bumps Treatment", price: "₦20,000", url: "services.html#waxing", cat: "Skincare" },
    { name: "Basic Pedicure", price: "₦12,000", url: "services.html#pedicure", cat: "Pedicure" },
    { name: "Jelly Spa Pedicure", price: "₦15,000", url: "services.html#pedicure", cat: "Pedicure" },
    { name: "Nail Manicure Care", price: "₦5,000", url: "services.html#pedicure", cat: "Manicure" },
    { name: "Smiley Piercing", price: "₦10,000", url: "services.html#piercings", cat: "Piercings" },
    { name: "Navel Belly Piercing", price: "₦10,000", url: "services.html#piercings", cat: "Piercings" },
    { name: "Nose Piercing", price: "₦10,000", url: "services.html#piercings", cat: "Piercings" },
    { name: "Spectrum Piercing", price: "₦12,000", url: "services.html#piercings", cat: "Piercings" },
    { name: "Surface Piercing", price: "₦15,000", url: "services.html#piercings", cat: "Piercings" }
  ];

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
        return;
      }

      const matches = TREATMENTS_DATA.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.cat.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
        searchResults.innerHTML = matches.map(m => `
          <a href="${m.url}" class="search-result-item">
            <div>
              <div class="item-title">${m.name}</div>
              <small style="color:var(--brand-taupe);font-size:0.75rem;">Category: ${m.cat}</small>
            </div>
            <div class="item-price">${m.price}</div>
          </a>
        `).join('');
        searchResults.style.display = 'block';
      } else {
        searchResults.innerHTML = `
          <div style="padding:16px;text-align:center;color:var(--text-muted);font-size:0.88rem;">
            No treatment found for "${query}". <br>
            <a href="services.html" style="color:var(--brand-honey-hover);font-weight:600;margin-top:6px;display:inline-block;">View Full Price Menu →</a>
          </div>
        `;
        searchResults.style.display = 'block';
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }

  // 4. Testimonials Carousel
  const reviewTrack = document.getElementById('review-track');
  const reviewDots = document.getElementById('review-dots');

  if (reviewTrack && reviewDots) {
    const slides = reviewTrack.querySelectorAll('.review-slide');
    let currentIndex = 0;
    let autoPlayTimer = null;

    // Generate dots
    reviewDots.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.classList.add('review-dot');
      if (idx === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to review ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetAutoPlay();
      });
      reviewDots.appendChild(dot);
    });

    const dots = reviewDots.querySelectorAll('.review-dot');

    const goToSlide = (idx) => {
      currentIndex = (idx + slides.length) % slides.length;
      reviewTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
    };

    const startAutoPlay = () => {
      autoPlayTimer = setInterval(nextSlide, 5500);
    };

    const resetAutoPlay = () => {
      clearInterval(autoPlayTimer);
      startAutoPlay();
    };

    startAutoPlay();
  }

  // 5. Category Tab Filtering on Services Page
  const tabButtons = document.querySelectorAll('.pricing-tab-btn');
  const categoryBlocks = document.querySelectorAll('.pricing-category-block');

  if (tabButtons.length > 0 && categoryBlocks.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetCat = btn.getAttribute('data-category');

        categoryBlocks.forEach(block => {
          if (targetCat === 'all' || block.getAttribute('data-category') === targetCat) {
            block.style.display = 'block';
          } else {
            block.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Direct WhatsApp Booking Form Generator (Contact Page)
  const bookingForm = document.getElementById('appointment-inquiry-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('client-name')?.value.trim() || 'Client';
      const phone = document.getElementById('client-phone')?.value.trim() || '';
      const service = document.getElementById('treatment-selected')?.value || 'Facial / Spa Consultation';
      const date = document.getElementById('preferred-date')?.value || 'Earliest available';
      const time = document.getElementById('preferred-time')?.value || 'Flexible';
      const notes = document.getElementById('client-notes')?.value.trim() || 'None';

      const message = `Hello Honey Bee Beauty Hive (Spa & Facials),%0A%0AI would like to book an appointment with your sanctuary:%0A• Client Name: ${encodeURIComponent(name)}%0A• Contact Phone: ${encodeURIComponent(phone)}%0A• Treatment Desired: ${encodeURIComponent(service)}%0A• Preferred Date: ${encodeURIComponent(date)}%0A• Preferred Time: ${encodeURIComponent(time)}%0A• Notes/Skin Concerns: ${encodeURIComponent(notes)}%0A%0APlease confirm availability and slot details at your 116 Effurun Sapele Road location. Thank you!`;

      const whatsappUrl = `https://wa.me/2348133134415?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
