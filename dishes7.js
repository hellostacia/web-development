async function loadDishes() {
  try {
    const response = await fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/dishes");
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    }

    const dishes = await response.json();
    console.log("Данные с сервера:", dishes); // можно убрать после проверки

    // Группируем блюда по категориям
    const categorized = {
      soups: [],
      main_course: [],
      salads_starters: [],
      beverages: [],
      desserts: []
    };

    dishes.forEach(dish => {
      switch (dish.category) {
        case "soup":
          categorized.soups.push(dish);
          break;
        case "main_course":
          categorized.main_course.push(dish);
          break;
        case "salad_starter":
          categorized.salads_starters.push(dish);
          break;
        case "beverage":
          categorized.beverages.push(dish);
          break;
        case "dessert":
          categorized.desserts.push(dish);
          break;
      }
    });

    // Отрисовываем блюда в каждом разделе
    renderCategory(".soups .menu-grid", categorized.soups);
    renderCategory(".main-dishes .menu-grid", categorized.main_course);
    renderCategory(".salads .menu-grid", categorized.salads_starters);
    renderCategory(".drinks .menu-grid", categorized.beverages);
    renderCategory(".desserts .menu-grid", categorized.desserts);
  } catch (error) {
    console.error("Ошибка при загрузке блюд:", error);
    const main = document.querySelector("main");
    const err = document.createElement("p");
    err.textContent = "Не удалось загрузить меню. Попробуйте позже.";
    err.style.color = "red";
    err.style.textAlign = "center";
    main.appendChild(err);
  }
}

// функция отрисовки блюд
function renderCategory(selector, dishes) {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = "";

  dishes.forEach(dish => {
    const card = document.createElement("div");
    card.classList.add("dish");
    card.dataset.category = dish.category;
    card.dataset.kind = dish.kind;

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

// вызываем загрузку при открытии страницы
document.addEventListener("DOMContentLoaded", loadDishes);
