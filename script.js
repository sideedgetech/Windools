// script.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {
      const content = card.textContent.toLowerCase();
      card.style.display = content.includes(filter) ? "block" : "none";
    });
  });

  // Some cool dynamic animation glow effect
  document.addEventListener("mousemove", (e) => {
    document.body.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #101010, #000)`;
  });

  // Bounce in cards on load
  const cards = document.querySelectorAll(".tool-card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "all 0.5s ease-out";
      card.style.transform = "translateY(0)";
      card.style.opacity = 1;
    }, index * 100);
  });
});
