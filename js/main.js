// ============================================
//  SCROLL REVEAL
// ============================================

var revealEls = document.querySelectorAll('.r');

var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(function(el) {
  revealObserver.observe(el);
});

// ============================================
//  MOBILE MENU
// ============================================

var menuBtn  = document.getElementById('menuBtn');
var mobileNav = document.getElementById('mobileNav');
var menuIcon  = document.getElementById('menuIcon');

if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    var isOpen = mobileNav.classList.toggle('open');
    menuIcon.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });
}

// Close mobile nav when a link is clicked
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      menuIcon.innerHTML = '&#9776;';
    });
  });
}

// ============================================
//  FOOTER YEAR
// ============================================

var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ============================================
//  CONTACT FORM
// ============================================

var contactForm = document.getElementById('contactForm');
var submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var original = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate sending — wire up a real backend or Formspree when ready
    setTimeout(function() {
      submitBtn.textContent = '&#10003; Message Sent!';
      setTimeout(function() {
        submitBtn.innerHTML = '&#8599; Send Message';
        submitBtn.disabled = false;
        contactForm.reset();
      }, 2500);
    }, 1000);
  });
}
