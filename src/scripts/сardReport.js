// Функция "complain" создает всплывающее окно с формой жалобы на картинку после клика на кнопку "btn__report" в карточке с классом "card"
function complain() { 
    const complainBtn = document.querySelectorAll(".btn__report");
    complainBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest('.card');
        card.classList.add('hidden');
        // Создаем основное окно для жалобы на карточку (прозрачное)
        const main = document.querySelector(".main");
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
        // Создаем блок для кнопкок добавления жалобы на карточки
        const blockAdd = document.createElement("div");
        blockAdd.classList.add("block__add");
        secondWindow.append(blockAdd);
        // Создаем текст для кнопки добавления карточки
        const textBtnAdd = document.createElement("p");
        textBtnAdd.classList.add("title__btnAdd");
        textBtnAdd.textContent = "Сomplain about the picture";
        blockAdd.append(textBtnAdd);
        // Создаем контейнер для input-radio 
        const reportWraper = document.createElement("div");
        reportWraper.classList.add("report__wrapper");
        blockAdd.append(reportWraper);
        // Создаем массив с текстом жалоб
        const reportNames = ["Violence", "Child abuse", "Sex abuse", "Inappropriate content", "Not interested"];
        // В форме есть список опций для жалобы на картинку (radio buttons), кнопка закрытия окна (closeBtn) и кнопка отправки жалобы (sendReport)
        for (let i = 1; i <= 5; i++) {
          const reportInput = document.createElement("input");
          reportInput.classList.add("input__radio");
          reportInput.type = "radio";
          reportInput.name = "report-option";
          reportInput.value = reportNames[i-1];
  
          const reportLabel = document.createElement("label");
          reportLabel.classList.add("report__label");
          reportLabel.textContent = reportNames[i-1];
  
          const reportContainer = document.createElement("div");
          reportContainer.classList.add("report__container");
          reportContainer.append(reportInput, reportLabel);
  
          reportWraper.append(reportContainer);
        }
        // Создаем кнопку закрытия окна
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close");
        closeBtn.innerText = "Х";
        blockClose.append(closeBtn);
  
        closeBtn.addEventListener("click", () => {
          card.classList.remove('hidden');
          mainWindow.remove();
        });
        // Cоздаем кнопку для отправки жалобы по input
        const sendReport = document.createElement("button");
        sendReport.classList.add("btn__sendReport");
        sendReport.textContent = "Send Report";
        blockAdd.append(sendReport);
        // при нажатии указывается в console.log какую жалобу написал пользователь
        sendReport.addEventListener("click", () => {
          const selectedOption = document.querySelector('input[name="report-option"]:checked');
          if (selectedOption) {
            const reportValue = selectedOption.value;
            console.log(`User selected ${reportValue}`);
          } else {
            console.log("Please select a report option");
          }
          card.style.justifyContent = "start";
          // После отправки жалобы, удаляется карточка с классом "card" и закрывается всплывающее окно
          card.remove();
          mainWindow.remove();
        });
      });
    });
  };

  export{ complain } 
  