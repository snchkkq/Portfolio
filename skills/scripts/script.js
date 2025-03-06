// Определяем, мобильное устройство или нет
const isMobile = window.matchMedia('(max-width: 600px)').matches;

// Устанавливаем threshold в зависимости от устройства
const thresholdValue = isMobile ? 0.1 : 0.3;

// Получаем все секции с классом .section
const sections = document.querySelectorAll('.section');

// Настраиваем IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Добавляем класс visible
      observer.unobserve(entry.target); // Прекращаем отслеживание
    }
  });
}, { threshold: thresholdValue }); // Используем динамическое значение threshold

// Наблюдаем за всеми секциями
sections.forEach(section => {
  observer.observe(section);
});

var sidelist = document.getElementById("side__list");

function openMenu() {
  sidelist.style.right = "0";
}
function closeMenu() {
  sidelist.style.right = "-200px";
}