document.addEventListener("DOMContentLoaded", () => {
  // Сопоставляем категории
  const categoryMap = {
    soups: document.querySelector(".soups .menu-grid"),
    main_course: document.querySelector(".main-dishes .menu-grid"),
    beverages: document.querySelector(".drinks .menu-grid")
  };

  // Сортируем блюда по названию
  dishes.sort((a, b) => a.name.localeCompare(b.name));

  // Создаем карточки и вставляем их на страницу
  dishes.forEach(dish => {
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

    // Добавляем карточку в нужную секцию
    if (categoryMap[dish.category]) {
      categoryMap[dish.category].appendChild(card);
    }
  });
});
