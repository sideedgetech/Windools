function filterTools(category) {
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function liveSearch() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'block' : 'none';
  });
}

document.getElementById('themeSwitcher').addEventListener('change', () => {
  document.body.classList.toggle('light');
});

// Add bounce animation on hover
const cards = document.querySelectorAll('.tool-card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});
