document.addEventListener("DOMContentLoaded", () => {
  const categoryMap = {
    soups: document.querySelector(".soups .menu-grid"),
    main_course: document.querySelector(".main-dishes .menu-grid"),
    salad: document.querySelector(".salads .menu-grid"),
    beverages: document.querySelector(".drinks .menu-grid"),
    dessert: document.querySelector(".desserts .menu-grid")
  };

  // Сортировка по имени
  dishes.sort((a, b) => a.name.localeCompare(b.name));

  function renderDishes(category, kind = null) {
    const container = categoryMap[category];
    container.innerHTML = "";
    let filtered = dishes.filter(d => d.category === category);
    if (kind) filtered = filtered.filter(d => d.kind === kind);

    filtered.forEach(dish => {
      const card = document.createElement("div");
      card.classList.add("dish");
      card.dataset.dish = dish.keyword;
      card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <p class="price">${dish.price}₽</p>
        <p class="name">${dish.name}</p>
        <p class="weight">${dish.count}</p>
        <button>Добавить</button>
      `;
      container.appendChild(card);
    });
  }

  // Отобразим все блюда по категориям при загрузке
  Object.keys(categoryMap).forEach(cat => renderDishes(cat));

  // Фильтры
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.closest("section");
      const category = Object.keys(categoryMap).find(key => categoryMap[key] === section.querySelector(".menu-grid"));
      const wasActive = btn.classList.contains("active"); // проверяем до снятия классов

      // Снимаем класс active с всех кнопок
      section.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));

      if (wasActive) {
        // если кнопка была активна — показываем все блюда
        renderDishes(category);
      } else {
        // если кнопка была неактивна — активируем ее и фильтруем
        btn.classList.add("active");
        renderDishes(category, btn.dataset.kind);
      }
    });
  });
});
