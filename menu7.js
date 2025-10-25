document.addEventListener("DOMContentLoaded", async () => {
  const categoryMap = {
    soups: document.querySelector(".soups .menu-grid"),
    main_course: document.querySelector(".main-dishes .menu-grid"),
    salad: document.querySelector(".salads .menu-grid"),
    beverages: document.querySelector(".drinks .menu-grid"),
    dessert: document.querySelector(".desserts .menu-grid")
  };

  let dishes = [];

  // === 1. Загружаем данные с API ===
  try {
    const response = await fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/dishes");
    if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
    dishes = await response.json();
    console.log("✅ Блюда загружены:", dishes);
  } catch (error) {
    console.error("❌ Не удалось загрузить блюда:", error);
    const main = document.querySelector("main");
    const err = document.createElement("p");
    err.textContent = "Не удалось загрузить меню. Попробуйте позже.";
    err.style.color = "red";
    err.style.textAlign = "center";
    main.appendChild(err);
    return;
  }

  // === 2. Сортировка по имени ===
  dishes.sort((a, b) => a.name.localeCompare(b.name));

  // === 3. Функция отрисовки ===
  function renderDishes(category, kind = null) {
    const container = categoryMap[category];
    if (!container) return;
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

  // === 4. Отобразим все блюда по категориям ===
  Object.keys(categoryMap).forEach(cat => renderDishes(cat));

  // === 5. Фильтры ===
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.closest("section");
      const category = Object.keys(categoryMap).find(key => categoryMap[key] === section.querySelector(".menu-grid"));
      const wasActive = btn.classList.contains("active");

      // убираем класс active со всех кнопок
      section.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));

      if (wasActive) {
        // если фильтр повторно нажат — показываем все блюда
        renderDishes(category);
      } else {
        // активируем фильтр и показываем только выбранный тип
        btn.classList.add("active");
        renderDishes(category, btn.dataset.kind);
      }
    });
  });
});
