// Функция searchLogic предназначена для реализации логики поиска карточек
function searchLogic() {
    // Внутри функции мы инициализируем необходимые переменные
    const inputSearch = document.querySelector(".header__search");
    const cardDescriptions = document.querySelectorAll(".title");
    const mainCard = document.querySelector(".main__card");
  
    // Добавляем обработчик событий на поле ввода для поиска
    inputSearch.addEventListener("input", (event) => {
      const searchValue = event.target.value.toLowerCase();
      cardDescriptions.forEach((description, index) => {
        const firstWord = description.textContent.toLowerCase().split(" ")[0];
        const card = description.closest(".card");
        // Если есть совпадение, то отображаем карточку, если нет - скрываем
        if (firstWord.startsWith(searchValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
      rebuildCards(mainCard);
    });


  // Функция rebuildCards используется для перестройки карточек в порядке их отображения после скрытия/отображения
    function rebuildCards(container) {
      let visibleCards = Array.from(
        container.querySelectorAll(".card:not([style*='display: none'])")
      );
      container.style.display = "none";
      // Эта функция скрывает контейнер с карточками, перестраивает порядок и отображает контейнер снова
      requestAnimationFrame(() => {
        container.style.display = "flex";
        container.style.justifyContent = "start";
        for (let card of visibleCards) {
          container.appendChild(card);
        }
      });
    }
  }

  export{ searchLogic }
  
  //End searchLogic