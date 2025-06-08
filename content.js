// Получаем данные из хранилища
chrome.storage.sync.get(['enablebutton0','enablebutton1','enablebutton2','enabletimer','link','buttontext1','buttontext2','timer','panelwidth'], function(result) {
    if(result.enablebutton0){
        // Создаем div для ссылки
            const panelwidth = result.panelwidth;
            const linkContainer = document.createElement('div');
            linkContainer.id = 'button-link';
            linkContainer.style.width = panelwidth;
        // создание домашней кнопки
        if(result.enablebutton1){
            createHomeButton(result.link || 'https://example.com', result.buttontext1 || "Главное меню");

            function createHomeButton(url, txt) {
                // Создаем ссылку
                const frame = document.createElement('div');
                const link = document.createElement('a');
                frame.id = 'button-frame';
                link.id = 'home-button-id';
                link.href = url;
                link.textContent = txt;
                
                frame.appendChild(link);
                linkContainer.appendChild(frame);
                document.body.appendChild(linkContainer);
    
                // Сдвигаем содержимое страницы под панель упавления
                document.body.style.marginLeft = panelwidth + 'px';
            }
        }
        // создание кнопки "назад"
        if(result.enablebutton2){
            createBackButton(result.buttontext2 || 'Назад');
            
            function createBackButton(txt) {
                // Создаем ссылку
                const frame = document.createElement('div');
                const link = document.createElement('a');
                frame.id = 'button-frame';
                link.id = 'back-button-id';
                link.href.onclick = () => window.history.back();
                link.textContent = txt;
                
                frame.appendChild(link);
                linkContainer.appendChild(frame);
                document.body.appendChild(linkContainer);
    
                // Сдвигаем содержимое страницы под панель упавления
                document.body.style.marginLeft = panelwidth + 'px';
            }
        }
    
        // условие, если включен таймер
        if(result.enabletimer & window.location.href != result.link){
                const redirectUrl = result.link;
                let idleTimer;
                
                const resetIdleTimer = () => {
                  // отменяем предыдущий таймер
                  clearTimeout(idleTimer);
                  // запускаем отсчёт на 5 секунд
                  idleTimer = setTimeout(() => window.location.href = redirectUrl, result.timer*1000);
                };
    
                // регистрируем события движения мыши и нажатия клавиш
                ['mousemove', 'keypress'].forEach(event => document.addEventListener(event, resetIdleTimer));
                resetIdleTimer();
        }
    }
});
