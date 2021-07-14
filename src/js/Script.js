"use strict"

let siteType = prompt(`Выберите тип сайта:
\n 1 - сайт визитка
\n 2 - интернет магазин
\n 3 - корпоративный сайт`);

let design = prompt(`Выберите дизайн:
\n 1 - минималистичный
\n 2 - шаблонный
\n 3 - уникальный`);

let adaptability = prompt(`Нужна ли адаптинвость:
\n 1 - да
\n 2 - нет`);

let resultPrice = 0;
let term = 0;

function calculate(siteType, design, adaptability) {
  resultPrice = 1000 * siteType;
  if (design == 1) {
    resultPrice = resultPrice * 1.2;
  } else if (design == 2) {
    resultPrice = resultPrice * 1.6;
  } else if (design == 3) {
    resultPrice = resultPrice * 2;
  }
  if (adaptability == 1) {
    resultPrice = resultPrice * 1.5;
  }
  term = Math.round(resultPrice / 250);
}

calculate(siteType, design, adaptability);

alert(`Примерная стоимость: ~${resultPrice} ₽
\nПримерные сроки: ~${term} дней`);