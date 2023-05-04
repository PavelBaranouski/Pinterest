// Функция скрытия карточки
function hidePin() {
  // Получает все кнопки "скрыть карточку" на странице и назначает им обработчик событий
    const btnHidePin = document.querySelectorAll(".btn__hidePin");
    // При клике на кнопку скрывает карточку, на которой находится кнопка, и выравнивает оставшиеся карточки по левому краю с отступом
    btnHidePin.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const card = event.target.closest(".card"); 
        card.style.display = "none";
        card.parentElement.style.justifyContent = "start";
        card.parentElement.style.marginLeft = "20px"; 
      });
    });
  }

  export{ hidePin };
  