// js/carrosel.js

let currentIndex = 0;
const items = document.querySelectorAll('.carrosel-item');
const totalItems = items.length;

function showCarroselItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showCarroselItem(currentIndex);
}

// Mostrar o primeiro item
showCarroselItem(currentIndex);

// Trocar o item a cada 5 segundos
setInterval(nextItem, 5000);