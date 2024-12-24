document.getElementById('search-button').addEventListener('click', function () {
    const button = this;
    const loader = document.getElementById('loader');
    const searchInput = document.getElementById('search-input').value;
    document.getElementById('search-input').value = '';

    const isValidUrl = /^https:\/\//i.test(searchInput);

    if (!isValidUrl) {
        alert('Введіть коректне посилання, яке починається з "https://"');
        return; 
    }

   
    button.disabled = true;

    loader.style.display = 'inline-block';


    setTimeout(() => {
        button.disabled = false;
        loader.style.display = 'none';
        alert('Перевірка завершена!');
    }, 3000);

    setTimeout(() => {
        document.getElementById('resultText').textContent = searchInput + ": Приклад результату";
    }, 3000);
});


document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
