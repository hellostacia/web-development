document.addEventListener("DOMContentLoaded", () => { 
  const orderSummary = document.querySelector(".order-summary");
  const totalBlock = document.querySelector(".total-price");

  // Объект с выбранными блюдами
  let selected = {
    soups: null,
    main_course: null,
    beverages: null
  };

  // При клике на кнопку "Добавить"
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
      { key: "beverages", name: "Напиток" }
    ];

    let total = 0;
    let hasSelection = false;

    // Проверяем, выбрано ли хоть одно блюдо
    Object.values(selected).forEach(dish => {
      if (dish) hasSelection = true;
    });

    // Если ничего не выбрано
    if (!hasSelection) {
      orderSummary.innerHTML = `<p>Ничего не выбрано</p>`;
      totalBlock.style.display = "none";
      return;
    }

    // Если выбрано хотя бы одно блюдо — показываем категории
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

    // Итоговая сумма
    totalBlock.style.display = "block";
    totalBlock.textContent = `Стоимость заказа: ${total}₽`;
  }

  // Вызываем при загрузке страницы
  updateOrder();
});

