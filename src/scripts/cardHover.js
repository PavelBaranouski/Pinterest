// Функция добавляет обработчики событий на события mouseover и mouseout для изображений с указанным URL
function addImageHoverEvent(imageUrl) {
    const imgs = document.querySelectorAll(`img[src="${imageUrl}"]`);
    imgs.forEach((img) => {
      // При наведении на изображение оно увеличивается до 1.1x своего размера
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
      });
      // При убирании курсора изображение возвращается к своему первоначальному размеру
      img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
      });
    });
  };

  export{addImageHoverEvent};
