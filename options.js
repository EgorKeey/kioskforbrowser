// Сохранение изменений
document.getElementById('save').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const buttontext = document.getElementById('buttontext').value;
    const enablebtn = document.getElementById('enablebutton').checked;
    const timer = document.getElementById('timer').value;
    const enabletimer = document.getElementById('enabletimer').checked;
    chrome.storage.sync.set({ link: link, buttontext: buttontext, enablebtn: enablebtn, timer: timer, enabletimer: enabletimer}, function() {
        alert('Изменения сохранены!');
    });
});


// Загрузка сохраненных изменений при открытии страницы
chrome.storage.sync.get(['link', 'buttontext','enablebtn','timer','enabletimer'], function(result) {
    document.getElementById('link').value = result.link || '';
    document.getElementById('buttontext').value = result.buttontext || '';
    document.getElementById('enablebutton').checked = result.enablebtn || '';
    document.getElementById('timer').value = result.timer || '';
    document.getElementById('enabletimer').checked = result.enabletimer || '';
});

