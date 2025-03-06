var sidelist = document.getElementById("side__list");

function openMenu() {
  sidelist.style.right = "0";
}
function closeMenu() {
  sidelist.style.right = "-200px";
}

document.querySelectorAll('.about-btn').forEach(button => {
  button.addEventListener('click', function () {
      const projectCard = this.closest('.project-card');
      projectCard.classList.toggle('active'); // Переключаем класс для отображения/скрытия описания
  });

  // Обработчик для плавного скрытия при убирании курсора с карточки
  button.closest('.project-card').addEventListener('mouseleave', function () {
      this.classList.remove('active');
  });
});