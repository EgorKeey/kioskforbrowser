chrome.storage.sync.get(['enablebtn'], function(result) {
    if(result.enablebtn){

        // Получаем ссылку из хранилища
        chrome.storage.sync.get(['link','buttontext'], function(result) {
            createFloatingLink(result.link || 'https://example.com', result.buttontext || 'Кнопка');
        });
        
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
});


