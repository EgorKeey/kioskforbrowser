// Получаем данные из хранилища
chrome.storage.sync.get(['enablebtn','enabletimer','link','buttontext','timer','link'], function(result) {
    if(result.enablebtn){

        createFloatingLink(result.link || 'https://example.com', result.buttontext || 'Кнопка');
        
        function createFloatingLink(url, txt) {
            // Создаем div для ссылки
            const linkContainer = document.createElement('div');
            linkContainer.id = 'floating-link';
            
            // Создаем ссылку
            const link = document.createElement('a');
            link.href = url;
            link.textContent = txt;
            link.target = '_blank';
            
            linkContainer.appendChild(link);
            document.body.appendChild(linkContainer);
        }
    }

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
});


