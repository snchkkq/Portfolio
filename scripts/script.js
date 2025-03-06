const isMobileTab = window.matchMedia('(max-width: 600px)').matches;

document.querySelectorAll('.tabs__button').forEach(link => {
  link.addEventListener('click', function (event) {
    event.stopPropagation();

    const target = this.getAttribute('data-target');
    const targetContent = document.getElementById(target);

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      targetContent.classList.remove('visible');
    } else {
      document.querySelectorAll('.tabs__button').forEach(link => link.classList.remove('active'));
      document.querySelectorAll('.tabs__content').forEach(content => content.classList.remove('visible'));

      this.classList.add('active');
      targetContent.classList.add('visible');
    }
  });
});

if (isMobileTab) {

  const defaultTab = document.querySelector('.tabs__button[data-target="skills"]');
  const defaultContent = document.getElementById('skills');

  if (defaultTab && defaultContent) {
    defaultTab.classList.add('active');
    defaultContent.classList.add('visible');
  }
}

document.addEventListener('click', function(event) {

  const tabsContainer = document.querySelector('.about__tabs');

  if (!tabsContainer.contains(event.target)) {
      document.querySelectorAll('.tabs__button').forEach(link => link.classList.remove('active'));
      document.querySelectorAll('.tabs__content').forEach(content => content.classList.remove('visible'));
  }
});

window.onload = function() {
  window.scrollTo(0, 0);
};

// Определяем, мобильное устройство или нет
const isMobile = window.matchMedia('(max-width: 600px)').matches;

// Устанавливаем threshold в зависимости от устройства
const thresholdValue = isMobile ? 0.3 : 0.5;

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

document.addEventListener('DOMContentLoaded', function () {
  // Проверяем, если вкладка "Skills" была открыта
  const isSkillsOpened = localStorage.getItem('skillsOpened');

  // Если вкладка не была открыта, то показываем её
  if (!isSkillsOpened) {
      // Активируем вкладку "Skills"
      const skillsTab = document.querySelector('.tabs__button[data-target="skills"]');
      skillsTab.classList.add('active');

      // Показываем контент вкладки "Skills"
      const skillsContent = document.getElementById('skills');
      skillsContent.classList.add('visible');

      // Сохраняем информацию о том, что вкладка открыта
      localStorage.setItem('skillsOpened', 'true');
  }

  // Добавляем обработчик для прокрутки
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

// Функция для проверки видимости элемента
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функция для обработки скролла
function handleScroll() {
  const section = document.querySelector('.about__details');
  const activeTab = document.querySelector('.tabs__button.active');

  // Проверяем, если активна другая вкладка, ничего не делаем
  if (activeTab && activeTab.getAttribute('data-target') !== 'skills') {
      return;
  }

  if (isInViewport(section)) {
      // Добавляем класс для вкладки "Skills"
      const skillsTab = document.querySelector('.tabs__button[data-target="skills"]');
      skillsTab.classList.add('active');
      
      // Активируем контент вкладки "Skills"
      const skillsContent = document.getElementById('skills');
      skillsContent.classList.add('visible');
  }
}

var sidelist = document.getElementById("side__list");

function openMenu() {
  sidelist.style.right = "0";
}
function closeMenu() {
  sidelist.style.right = "-200px";
}

