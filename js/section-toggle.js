// Get all nav items that control sections
const navItems = document.querySelectorAll('.app-nav .item');
const allSections = document.querySelectorAll('.app-main > section');

// Handle click on nav items
navItems.forEach(item => {
  const targetId = item.getAttribute('data-target');
  if (!targetId) return;

  item.addEventListener('click', () => {
    // Update navigation active state
    navItems.forEach(i => i.classList.remove('is--active'));
    item.classList.add('is--active');

    // Hide all sections
    allSections.forEach(section => section.classList.remove('is--visible'));

    // Show choosen section
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.classList.add('is--visible');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
