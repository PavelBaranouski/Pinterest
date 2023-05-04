import { addImageHoverEvent } from './cardHover.js';  // Импортируем функцию addImageHoverEvent из модуля cardHover.js
import { hidePin } from './cardHidePin.js'; // Импортируем функцию hidePin из модуля cardHidePin.js
import { searchLogic } from './cardsSearch.js'; // Импортируем функцию searchLogic из модуля cardsSearch.js
import { complain } from './сardReport.js'; // Импортируем функцию complain из модуля cardReport.js
import { addAddButtonEventListener } from './addCardToBoard.js'; // Импортируем функцию addAddButtonEventListener из модуля addCardToBoard.js
import { cardStorage } from './cardStorage.js'; // Импортируем объект cardStorage из модуля cardStorage.js


// Асинхронная функция получения карточек
async function getCards() {
  // Отправляем GET-запрос на сервер и получаем ответ
  try { 
    const response = await fetch("https://6427d980161067a83b0209dd.mockapi.io/api/products/Users");
    // Преобразуем ответ в JSON-формат
    const responseJson = await response.json();
    // Генерируем HTML-код карточек и добавляем их на страницу
    const cardsHtml = responseJson.map((obj) => renderImg(obj)).join("");
    const mainCard = document.querySelector(".main__card");
    mainCard.insertAdjacentHTML("beforeend", cardsHtml);
    // Добавляем обработчики событий на картинки и кнопки "Add to board" на каждой карточке
    responseJson.forEach((obj) => {
      addImageHoverEvent(obj.image);
      addAddButtonEventListener(obj.id); 
    });
    // Возвращаем полученные данные в виде JSON-объекта
    return responseJson;
  } catch(err) {
    console.log("Error: ", err);
  }
}

// Функция создает разметку карточки с заданными параметрами и возвращает эту разметку
function renderImg(obj, boardId) {
  const masterCard = `<div class="card" id="${obj.id}">
    <div class="card__img">
      <img src="${obj.image}" class="img__item" alt="imgCard">
      <div class="card__info">
        <button class="btn__add">Add to board (${obj.id})</button>
        <button class="btn__hidePin">Hide Pin</button>
        <button class="btn__report">Complain</button>
      </div>
    </div>
    <div class="card__user">
      <img src="${obj.avatar}" alt="Avatar" class="user__avatar">
      <p class="title">${obj.title}</p>
    </div>
  </div>`;
  return masterCard;
}

// Функция displayImages() используется для отображения карточек, скрытия закрепленных карточек и инициализации логики поиска, жалоб и хранилища карточек
async function displayImages() {
  try {
    // Она использует функцию getCards() для получения карточек, которые затем рендерятся в элементе с классом "main__card"
    const cards = await getCards();
    const mainCard = document.querySelector(".main__card");
    // searchLogic(), complain() и cardStorage() являются функциями, импортированными из других модулей, и используются для добавления дополнительных функциональных возможностей карточкам
    hidePin();
    searchLogic();
    complain();
    cardStorage()
  } catch (err) {
    console.log("Error fetching cards: ", err);
  }
}

export { searchLogic, displayImages };



