// ScrollSpy refresh
    const scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 80 })
    
    // Back to top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 600 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple fake form handlers (prevent page jump)
    document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
      // e.preventDefault();
      alert('Thank you! Your form has been received.');
    }));