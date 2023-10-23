const scrollContainer = document.querySelector(".scroll-container");

scrollContainer.addEventListener("wheel", (e) => {
    scrollContainer.scrollLeft += e.deltaY;
});

const boxes = document.querySelectorAll('.box');
const popup = document.querySelector('.popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closePopup = document.querySelector('.close-popup');

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        popupTitle.textContent = `Título ${index + 1}`;
        popupDescription.textContent = `Descripción ${index + 1}`;
        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});