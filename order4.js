document.addEventListener("DOMContentLoaded", () => {
  const orderSummary = document.querySelector(".order-summary");
  const totalBlock = document.querySelector(".total-price");
  const orderForm = document.getElementById("order-form");

  // Объект выбранных блюд
  const selected = {
    soup: null,
    "main-course": null,
    salad: null,
    drink: null,
    dessert: null
  };

  // === 1. Функция уведомлений ===
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

  // === 2. Клик по кнопке "Добавить" в карточке блюда ===
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

  // === 3. Обновление блока заказа ===
  function updateOrder() {
    orderSummary.innerHTML = "";
    const categories = [
      { key: "soup", name: "Суп" },
      { key: "main-course", name: "Главное блюдо" },
      { key: "salad", name: "Салат/стартер" },
      { key: "drink", name: "Напиток" },
      { key: "dessert", name: "Десерт" }
    ];

    let total = 0;
    const hasSelection = Object.values(selected).some(d => d);

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

  updateOrder();

  // === 4. Проверка формы при отправке ===
  orderForm.setAttribute("novalidate", true);
  orderForm.addEventListener("submit", e => {
    e.preventDefault();
    const { soup, "main-course": main, salad, drink, dessert } = selected;

    if (!soup && !main && !salad && !drink && !dessert) {
      showNotification("Ничего не выбрано. Выберите блюда для заказа");
      return;
    }
    if ((soup || main || salad) && !drink) {
      showNotification("Выберите напиток");
      return;
    }
    if (soup && !main && !salad) {
      showNotification("Выберите главное блюдо/салат/стартер");
      return;
    }
    if (salad && !soup && !main) {
      showNotification("Выберите суп или главное блюдо");
      return;
    }
    if ((drink || dessert) && !main) {
      showNotification("Выберите главное блюдо");
      return;
    }

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      return;
    }

    orderForm.submit();
  });
});
