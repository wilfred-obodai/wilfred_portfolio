// ============================================
//  SCROLL REVEAL
// ============================================

const revealEls = document.querySelectorAll('.r');

const revealObserver = new IntersectionObserver(function(entries) {
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
//  SKILL BARS
// ============================================

const skillSection = document.querySelector('.skills');

const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.sk-fill');
      bars.forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-w');
      });
    }
  });
}, { threshold: 0.3 });

if (skillSection) {
  skillObserver.observe(skillSection);
}