// Функция создания окна для хранения карточек
function cardStorage() {
    // Получаем ссылки на все доски
    const boardLinks = document.querySelectorAll('.board__link');
    // Для каждой доски добавляем слушателя кликов
    boardLinks.forEach((link) => {
      link.addEventListener('click', () => {
        // Получаем идентификатор доски
        const boardId = link.dataset.board;
        // Создаем основное окно для хранения карточек (прозрачное)
        const main = document.querySelector('.main');
        const mainWindow = document.createElement('div');
        mainWindow.classList.add('main__window');
        main.append(mainWindow);
        // Создаем второе окно внутри основного
        const secondWindow = document.createElement('div');
        secondWindow.classList.add('second__window');
        secondWindow.style.width = '80%';
        secondWindow.style.height = '90%';
        mainWindow.append(secondWindow);
        // Создаем блок для кнопки закрытия окна
        const blockClose = document.createElement('div');
        blockClose.classList.add('block__close');
        secondWindow.append(blockClose);
        // Создаем блок для хранения карточек
        const blockAdd = document.createElement('div');
        blockAdd.classList.add('block__add');
        secondWindow.append(blockAdd);
        // Создаем текст для кнопки добавления карточки
        const textBtnAdd = document.createElement('p');
        textBtnAdd.classList.add('title__btnAdd');
        textBtnAdd.textContent = 'Сard Storage';
        blockAdd.append(textBtnAdd);
        // Создаем блок для всех карточек на доске
        const blockOfCard = document.createElement('div');
        blockOfCard.classList.add('block__card');
        blockOfCard.style.width = '100%';
        blockOfCard.style.height = '100%';
        blockAdd.append(blockOfCard);
        // Создаем кнопку закрытия окна
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close');
        closeBtn.innerText = 'Х';
        closeBtn.style.width = '8%';
        closeBtn.style.height = '60%';
        blockClose.append(closeBtn);
        // Добавляем слушателя кликов на кнопку закрытия окна
        closeBtn.addEventListener('click', () => {
          mainWindow.remove();
        });
        // Получаем сохраненные карточки из локального хранилища  
        localStorage.setItem("cards", JSON.stringify([...savedCards, { id: cardId, boardId: boardKey }]));
        // Фильтруем карточки по идентификатору доски и создаем их на странице
        savedCards
          .filter((card) => card.boardId === boardId) // фильтруем карточки по идентификатору доски
          .forEach((card) => {
            const masterCard = renderImg(card, boardId);
            blockOfCard.insertAdjacentHTML('beforeend', masterCard);
            addImageHoverEvent(card.image);
            addAddButtonEventListener(card.id);
          });
      });
    });
  };

  export{ cardStorage }