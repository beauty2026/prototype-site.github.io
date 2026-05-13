document.addEventListener("DOMContentLoaded", function () {
  // Находим все кнопки‑вкладки и секции контента
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".about-tab-content");

  // Добавляем обработчик клика на каждую кнопку
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Получаем ID целевой вкладки из data‑атрибута
      const targetTabId = button.getAttribute("data-tab");

      // Убираем активный класс у всех кнопок
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Добавляем активный класс текущей кнопке
      button.classList.add("active");

      // Скрываем все секции контента
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Показываем целевую секцию
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
