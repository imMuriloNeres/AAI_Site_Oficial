document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-container .card');
  const showMoreButton = document.getElementById('show-more');
  const showLessButton = document.getElementById('show-less');

  let currentVisibleCards = 4; // Número inicial de cards visíveis

  // Função para mostrar apenas os cards visíveis
  const showCards = (limit) => {
      cards.forEach((card, index) => {
          if (index < limit) {
              card.style.display = 'flex'; // Mostra o card
          } else {
              card.style.display = 'none'; // Esconde o card
          }
      });

      // Atualiza a visibilidade dos botões
      updateButtons(limit);
  };

  // Função para atualizar a visibilidade dos botões
  const updateButtons = (visibleCount) => {
      if (visibleCount >= cards.length) {
          showMoreButton.style.display = 'none'; // Todos os cards foram mostrados
          showLessButton.style.display = 'inline-block'; // Mostra o botão de fechar
      } else {
          showMoreButton.style.display = 'inline-block'; // Ainda há mais cards a mostrar
          showLessButton.style.display = 'none'; // Oculta o botão de fechar
      }
  };

  // Mostra os primeiros 4 cards inicialmente
  showCards(currentVisibleCards);

  // Evento de clique para o botão "Mais Oficinas e Cursos"
  showMoreButton.addEventListener('click', () => {
      currentVisibleCards += 4; // Aumenta o número de cards visíveis em 4
      showCards(currentVisibleCards); // Atualiza a exibição dos cards
  });

  // Evento de clique para o botão "Fechar"
  showLessButton.addEventListener('click', () => {
      currentVisibleCards = 4; // Redefine para mostrar apenas os 4 primeiros
      showCards(currentVisibleCards); // Atualiza a exibição dos cards
  });
});
