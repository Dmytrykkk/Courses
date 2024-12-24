document.getElementById('search-button').addEventListener('click', function () {
    const button = this;
    const loader = document.getElementById('loader');
    const searchInput = document.getElementById('search-input').value;

    // Перевірка, чи починається текст із "https://"
    const isValidUrl = /^https:\/\//i.test(searchInput); 

    if (!isValidUrl) {
        alert('Введіть коректне посилання, яке починається з "https://"');
        return; // Якщо URL некоректний, виходимо з функції
    }

    // Деактивація кнопки
    button.disabled = true;

    // Показ анімації завантаження
    loader.style.display = 'inline-block'; // Показуємо завантажувач

    // Емуляція виконання задачі
    setTimeout(() => {
        // Припустимо, завантаження завершено через 3 секунди
        loader.style.display = 'none'; // Приховуємо завантажувач
        alert('Перевірка завершена!');

        // Перехід на наступну сторінку
        window.location.href = 'result.html';
    }, 3000);

    // Очищення поля вводу
    document.getElementById('search-input').value = '';
});

// Додаємо подію для клавіші Enter в полі вводу
document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click(); // Імітація натискання кнопки
    }
});
