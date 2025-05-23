// Get all nav items that control sections
const navItems = document.querySelectorAll('.app-nav .item');
const allSections = document.querySelectorAll('[id]:not(#contact)'); // unngå footer

// Handle click on nav items
navItems.forEach(item => {
  const targetId = item.getAttribute('data-target');
  if (!targetId) return;

  item.addEventListener('click', () => {
    // Oppdater nav-aktiv tilstand
    navItems.forEach(i => i.classList.remove('is--active'));
    item.classList.add('is--active');

    // Skjul alle seksjoner
    allSections.forEach(section => section.classList.remove('is--visible'));

    // Vis valgt seksjon
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.classList.add('is--visible');
    }

    // Scroll til toppen av siden
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
