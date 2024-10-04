let openedBoxes = 0;

function openBox(boxNumber) {
    const box = document.getElementById(`box${boxNumber}`);
    if (!box.classList.contains('opened')) {
        box.classList.add('opened');

        // Создаем элемент для подарка
        const gift = document.createElement('div');
        gift.innerHTML = getGift(boxNumber);
        box.appendChild(gift); // Добавляем подарок в коробку

        // Запускаем конфетти
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        openedBoxes++;

        // Появление кнопки после открытия первой коробки
        if (openedBoxes === 1) {
            document.getElementById('showAll').style.display = 'block';
        }
    }
}

function getGift(boxNumber) {
    const gifts = [
        " То что ты захочешь!",
        " Пусто!",
        " Букет цветов!",
        " Духи!",
        " Модная сумка!",
        " Мишка!"
    ];
    return gifts[boxNumber - 1];
}

function showAllBoxes() {
    for (let i = 1; i <= 6; i++) {
        openBox(i);
    }
    document.getElementById('showAll').style.display = 'none';
}

