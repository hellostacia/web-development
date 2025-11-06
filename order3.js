document.addEventListener("DOMContentLoaded", () => {
  const orderSummary = document.querySelector(".order-summary");
  const totalBlock = document.querySelector(".total-price");
  const orderForm = document.getElementById("order-form");

  let selected = {
    "soups": null,
    "main_course": null,
    "salad": null,
    "beverages": null,
    "dessert": null
  };


  // При клике на кнопку "Добавить" блюда
  document.body.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON" && e.target.closest(".dish")) {
      const dishKey = e.target.closest(".dish").dataset.dish;
      const dish = dishes.find(d => d.keyword === dishKey);
      if (dish) {
        selected[dish.category] = dish;
        updateOrder();
      }
    }
  });

  // Функция обновления блока заказа
  function updateOrder() {
    orderSummary.innerHTML = "";

  const categories = [
    { key: "soups", name: "Суп" },
    { key: "main_course", name: "Главное блюдо" },
    { key: "salad", name: "Салат/стартер" },
    { key: "beverages", name: "Напиток" },
    { key: "dessert", name: "Десерт" }
  ];


    let total = 0;
    let hasSelection = false;

    Object.values(selected).forEach(dish => { if (dish) hasSelection = true; });

    if (!hasSelection) {
      orderSummary.innerHTML = `<p>Ничего не выбрано</p>`;
      totalBlock.style.display = "none";
      return;
    }

    categories.forEach(cat => {
      const block = document.createElement("div");
      block.classList.add("order-item");

      const label = document.createElement("h5");
      label.textContent = cat.name;
      block.appendChild(label);

      const dish = selected[cat.key];
      if (dish) {
        const dishInfo = document.createElement("p");
        dishInfo.textContent = `${dish.name} — ${dish.price}₽`;
        block.appendChild(dishInfo);
        total += dish.price;
      } else {
        const emptyText = document.createElement("p");
        emptyText.textContent = `${cat.name} не выбрано`;
        block.appendChild(emptyText);
      }

      orderSummary.appendChild(block);
    });

    totalBlock.style.display = "block";
    totalBlock.textContent = `Стоимость заказа: ${total}₽`;
  }

  // Отключаем стандартную проверку формы
  orderForm.setAttribute("novalidate", true);

  // Функция уведомления
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("order-notification");

    const content = document.createElement("div");
    content.classList.add("notification-content");

    const text = document.createElement("p");
    text.textContent = message;

    const button = document.createElement("button");
    button.textContent = "Окей";

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#333";
      button.style.color = "#fff";
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#fff";
      button.style.color = "#333";
    });

    button.addEventListener("click", () => notification.remove());

    content.appendChild(text);
    content.appendChild(button);
    notification.appendChild(content);
    document.body.appendChild(notification);
  }

  // Перехват submit
  orderForm.addEventListener("submit", e => {
    e.preventDefault();

    // selected: { soups, main_course, salad, beverages, dessert }
    const { soups, main_course, salad, beverages, dessert } = selected;

    // 1. Ничего не выбрано
    if (!soups && !main_course && !salad && !beverages && !dessert) {
      showNotification("Ничего не выбрано. Выберите блюда для заказа");
      return;
    }

    // 2. Выбраны все необходимые блюда (суп + главное/салат/стартер), но нет напитка
    if ((soups && (main_course || salad)) && !beverages) {
      showNotification("Выберите напиток");
      return;
    }

    // 3. Выбран суп, но не выбраны главное блюдо/салат/стартер
    if (soups && !main_course && !salad) {
      showNotification("Выберите главное блюдо/салат/стартер");
      return;
    }

    // 4. Выбран салат/стартер, но не выбраны суп/главное блюдо
    if (salad && !soups && !main_course) {
      showNotification("Выберите суп или главное блюдо");
      return;
    }

    // 5. Выбран напиток или десерт, но не выбрано главное блюдо
    if ((beverages || dessert) && !main_course) {
      showNotification("Выберите главное блюдо");
      return;
    }


    // Проверка данных формы
    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      return;
    }

    // Все ок, отправляем
    orderForm.submit();
  });

  // Инициализация блока заказа
  updateOrder();
});

