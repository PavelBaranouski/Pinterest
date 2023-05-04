// Добавление обработчика событий на кнопку "Добавить на доску"
function addAddButtonEventListener(cardId) {
    const addBtn = document.querySelector(`[id="${cardId}"] .btn__add`);
    addBtn.addEventListener("click", () => {
      const main = document.querySelector(".main");
      // Создаем основное окно (прозрачное)
      const mainWindow = document.createElement("div");
      mainWindow.classList.add("main__window");
      main.append(mainWindow);
      // Создаем второе окно внутри основного
      const secondWindow = document.createElement("div");
      secondWindow.classList.add("second__window");
      mainWindow.append(secondWindow);
      // Создаем блок для кнопки закрытия окна
      const blockClose = document.createElement("div");
      blockClose.classList.add("block__close");
      secondWindow.append(blockClose);
      // Создаем блок для кнопки добавления карточки
      const blockAdd = document.createElement("div");
      blockAdd.classList.add("block__add");
      secondWindow.append(blockAdd);
      // Создаем текст для кнопки добавления карточки
      const textBtnAdd = document.createElement("p");
      textBtnAdd.classList.add("title__btnAdd");
      textBtnAdd.textContent = "Add to board";
      blockAdd.append(textBtnAdd);
  
      for (let i = 1; i <= 3; i++) { // создание 3 кнопок через цикл
        const addBoard = document.createElement("button");
        addBoard.classList.add("btn__board");
        addBoard.textContent = `Board №${i}`;
        blockAdd.append(addBoard);
  
        (function(index) { // Добавление обработчика событий на выбор доски
          addBoard.addEventListener("click", (event) => {
            const boardKey = `Board ${index}`;
            const boardValue = localStorage.getItem(boardKey) || "";
            const updatedBoardValue = boardValue ? `${boardValue},${cardId}` : cardId;
            localStorage.setItem(boardKey, updatedBoardValue);
            alert(`Card ${cardId} added to the ${boardKey}`);
          });
        })(i);
      };
      // Добавление кнопки закрытия окна
      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close");
      closeBtn.innerText = "Х";
      blockClose.append(closeBtn);
      // Добавление обработчика событий на закрытие окна
      closeBtn.addEventListener("click", () => {
        mainWindow.remove();
      });
    });
  };

  export{ addAddButtonEventListener } // Функция экспортируется как "addAddButtonEventListener"