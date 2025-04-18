// Сохранение ссылки
document.getElementById('save').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const buttontext = document.getElementById('buttontext').value;
    const enablebtn = document.getElementById('enablebutton').checked;
    chrome.storage.sync.set({ link: link, buttontext: buttontext, enablebtn: enablebtn}, function() {
        alert('Изменения сохранены!');
    });
});

// Загрузка сохраненной ссылки при открытии страницы
chrome.storage.sync.get(['link', 'buttontext','enablebtn'], function(result) {
    document.getElementById('link').value = result.link || '';
    document.getElementById('buttontext').value = result.buttontext || '';
    document.getElementById('enablebutton').checked = result.enablebtn || '';
});

