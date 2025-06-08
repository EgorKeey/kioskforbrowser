// Сохранение изменений
document.getElementById('save').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const buttontext1 = document.getElementById('buttontext1').value;
    const buttontext2 = document.getElementById('buttontext2').value;
    const enablebutton0 = document.getElementById('enablebutton0').checked;
    const enablebutton1 = document.getElementById('enablebutton1').checked;
    const enablebutton2 = document.getElementById('enablebutton2').checked;
    const timer = document.getElementById('timer').value;
    const enabletimer = document.getElementById('enabletimer').checked;
    const panelwidth = document.getElementById('panelwidth').value;
    const panelwidthvalue = document.getElementById('panelwidthvalue').textContent;
    chrome.storage.sync.set({ link: link, buttontext1: buttontext1, buttontext2: buttontext2,
         enablebutton0: enablebutton0, enablebutton1: enablebutton1, enablebutton2: enablebutton2,
         timer: timer, enabletimer: enabletimer, panelwidth: panelwidth, panelwidthvalue:panelwidthvalue}, function() {
        alert('Изменения сохранены!');
    });
});


// Загрузка сохраненных изменений при открытии страницы
chrome.storage.sync.get(['link','buttontext1','buttontext2','enablebutton0','enablebutton1','enablebutton2','timer','enabletimer', 'panelwidth','panelwidthvalue'], function(result) {
    document.getElementById('link').value = result.link || '';
    document.getElementById('buttontext1').value = result.buttontext1 || '';
    document.getElementById('buttontext2').value = result.buttontext2 || '';
    document.getElementById('enablebutton0').checked = result.enablebutton0 || '';
    document.getElementById('enablebutton1').checked = result.enablebutton1 || '';
    document.getElementById('enablebutton2').checked = result.enablebutton2 || '';
    document.getElementById('timer').value = result.timer || '';
    document.getElementById('enabletimer').checked = result.enabletimer || '';
    document.getElementById('panelwidth').value = result.panelwidth || '';
    document.getElementById('panelwidthvalue').textContent = result.panelwidth || '';
});

// Обновление значения ширины панели навигации
const panelwidth = document.getElementById('panelwidth');
panelwidth.addEventListener('input', function(){
    document.getElementById('panelwidthvalue').textContent = panelwidth.value;
})