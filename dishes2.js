const dishes = [
  // Супы
  {
    keyword: "gaspacho",
    name: "Гаспачо",
    price: 195,
    category: "soups",
    count: "350 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/gazpacho",
    kind: "veg"
  },
  {
    keyword: "gribnoy",
    name: "Грибной суп-пюре",
    price: 185,
    category: "soups",
    count: "330 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/mushroom_soup",
    kind: "veg"
  },
  {
    keyword: "norvezhskiy",
    name: "Норвежский суп",
    price: 270,
    category: "soups",
    count: "330 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/norwegian_soup",
    kind: "fish"
  },
  {
    keyword: "ramen",
    name: "Рамен",
    price: 375,
    category: "soups",
    count: "425 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/ramen",
    kind: "meat"
  },
  {
    keyword: "tomyum",
    name: "Том ям с креветками",
    price: 650,
    category: "soups",
    count: "500 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/tomyum",
    kind: "fish"
  },
  {
    keyword: "chicken",
    name: "Куриный суп",
    price: 330,
    category: "soups",
    count: "350 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/chicken",
    kind: "meat"
  },

  // Основные блюда
  {
    keyword: "zharenaya-kartoshka",
    name: "Жареная картошка с грибами",
    price: 150,
    category: "main_course",
    count: "250 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/friedpotatoeswithmushrooms1",
    kind: "veg"
  },
  {
    keyword: "lazanya",
    name: "Лазанья",
    price: 385,
    category: "main_course",
    count: "310 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/lasagna",
    kind: "meat"
  },
  {
    keyword: "kotlety-s-pyure",
    name: "Котлеты из курицы с картофельным пюре",
    price: 225,
    category: "main_course",
    count: "280 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/chickencutletsandmashedpotatoes",
    kind: "meat"
  },
  {
    keyword: "fishrice",
    name: "Рыбная котлета с рисом и спаржей",
    price: 320,
    category: "main_course",
    count: "270 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/fishrice",
    kind: "fish"
  },
  {
    keyword: "pizza",
    name: "Пицца Маргарита",
    price: 450,
    category: "main_course",
    count: "470 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/pizza",
    kind: "veg"
  },
  {
    keyword: "shrimppasta",
    name: "Паста с креветками",
    price: 340,
    category: "main_course",
    count: "280 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/shrimppasta",
    kind: "fish"
  },

  // Салаты и стартеры
  {
    keyword: "saladwithegg",
    name: "Корейский салат с овощами и яйцом",
    price: 330,
    category: "salad",
    count: "250 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/saladwithegg",
    kind: "veg"
  },
  {
    keyword: "caesar",
    name: "Цезарь с цыпленком",
    price: 370,
    category: "salad",
    count: "220 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/caesar",
    kind: "meat"
  },
  {
    keyword: "shrimppasta",
    name: "Капрезе с моцареллой",
    price: 350,
    category: "salad",
    count: "235 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/caprese",
    kind: "veg"
  },
  {
    keyword: "tunasalad",
    name: "Салат с тунцом",
    price: 480,
    category: "salad",
    count: "250 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/tunasalad",
    kind: "fish"
  },
  {
    keyword: "frenchfries1",
    name: "Картофель фри с соусом Цезарь",
    price: 280,
    category: "salad",
    count: "235 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/frenchfries1",
    kind: "veg"
  },
  {
    keyword: "frenchfries2",
    name: "Картофель фри с кетчупом",
    price: 260,
    category: "salad",
    count: "235 г",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/frenchfries2",
    kind: "veg"
  },

  // Напитки
  {
    keyword: "apelsinoviy",
    name: "Апельсиновый сок",
    price: 120,
    category: "beverages",
    count: "300 мл",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/orangejuice",
    kind: "cold"
  },
  {
    keyword: "yablochniy",
    name: "Яблочный сок",
    price: 90,
    category: "beverages",
    count: "300 мл",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/applejuice",
    kind: "cold"
  },
  {
    keyword: "morkovniy",
    name: "Морковный сок",
    price: 110,
    category: "beverages",
    count: "300 мл",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/carrotjuice",
    kind: "cold"
  },
  {
    keyword: "cappuccino",
    name: "Капучино",
    price: 180,
    category: "beverages",
    count: "300 мл",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/cappuccino",
    kind: "hot"
  },
  {
    keyword: "greentea",
    name: "Зеленый чай",
    price: 100,
    category: "beverages",
    count: "300 мл",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/greentea",
    kind: "hot"
  },
  {
    keyword: "tea",
    name: "Черный чай",
    price: 90,
    category: "beverages",
    count: "300 мл",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/tea",
    kind: "hot"
  },

  // Десерты
  {
    keyword: "baklava",
    name: "Пахлава",
    price: 220,
    category: "dessert",
    count: "300 гр",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/baklava",
    kind: "medium"
  },
  {
    keyword: "checheesecake",
    name: "Чизкейк",
    price: 240,
    category: "dessert",
    count: "125 гр",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/checheesecake",
    kind: "small"
  },
  {
    keyword: "chocolatecheesecake",
    name: "Шоколадный чизкейк",
    price: 260,
    category: "dessert",
    count: "125 гр",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/chocolatecheesecake",
    kind: "small"
  },
  {
    keyword: "chocolatecake",
    name: "Шоколадный торт",
    price: 270,
    category: "dessert",
    count: "140 гр",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/chocolatecake",
    kind: "small"
  },
  {
    keyword: "donuts2",
    name: "Пончики (3 штуки)",
    price: 410,
    category: "dessert",
    count: "350 гр",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/donuts2",
    kind: "medium"
  },
  {
    keyword: "donuts",
    name: "Пончики (6 штук)",
    price: 650,
    category: "dessert",
    count: "700 гр",
    image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/donuts",
    kind: "large"
  }
];