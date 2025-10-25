// Варианты ланчей
const lunchCombos = [
  ["soups","main_course","salad","beverages"],
  ["soups","main_course","beverages"],
  ["soups","salad","beverages"],
  ["main_course","salad","beverages"],
  ["main_course","beverages"]
];

// Проверка при отправке формы
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const selectedKeys = Object.keys(selected).filter(key => selected[key]);
  let matchFound = false;

  for (let combo of lunchCombos) {
    if (combo.every(item => selectedKeys.includes(item)) && selectedKeys.every(k => combo.includes(k))) {
      matchFound = true;
      break;
    }
  }

  if (!selectedKeys.length) {
    showNotification("Ничего не выбрано. Выберите блюда для заказа");
  } else if (!matchFound) {
    if (!selectedKeys.includes("beverages")) {
      showNotification("Выберите напиток");
    } else if (selectedKeys.includes("soups") && !selectedKeys.includes("main_course") && !selectedKeys.includes("salad")) {
      showNotification("Выберите главное блюдо/салат/стартер");
    } else if (selectedKeys.includes("salad") && !selectedKeys.includes("soups") && !selectedKeys.includes("main_course")) {
      showNotification("Выберите суп или главное блюдо");
    } else if (selectedKeys.includes("beverages") || selectedKeys.includes("dessert")) {
      showNotification("Выберите главное блюдо");
    }
  } else {
    e.target.submit();
  }
});

// Функция уведомления
function showNotification(message) {
  const notif = document.createElement("div");
  notif.classList.add("notification");
  notif.innerHTML = `<p>${message}</p><button>Окей</button>`;
  document.body.appendChild(notif);

  const btn = notif.querySelector("button");
  btn.addEventListener("click", () => notif.remove());
}