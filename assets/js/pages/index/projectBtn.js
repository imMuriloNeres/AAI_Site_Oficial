document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-container .card');
  const showMoreButton = document.getElementById('show-more');
  const showLessButton = document.getElementById('show-less');

  let currentVisibleCards = 4;

  const showCards = (limit) => {
      cards.forEach((card, index) => {
          if (index < limit) {
              card.style.display = 'flex';
          } else {
              card.style.display = 'none';
          }
      });

      updateButtons(limit);
  };

  const updateButtons = (visibleCount) => {
      if (visibleCount >= cards.length) {
          showMoreButton.style.display = 'none';
          showLessButton.style.display = 'inline-block';
      } else {
          showMoreButton.style.display = 'inline-block';
          showLessButton.style.display = 'none';
      }
  };

  showCards(currentVisibleCards);

  showMoreButton.addEventListener('click', () => {
      currentVisibleCards += 4;
      showCards(currentVisibleCards);
  });

  showLessButton.addEventListener('click', () => {
      currentVisibleCards = 4;
      showCards(currentVisibleCards);
  });
});
