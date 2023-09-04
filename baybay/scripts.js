document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-language-button');
    let currentLanguage = 'english'; // Default language

    const translations = {
        'english': {},
        'chinese': {}
    };

function loadLanguage(language) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                translations[language] = JSON.parse(xhr.responseText);
                applyTranslations(language);
            } else {
                console.error('Failed to load language file:', xhr.status, xhr.statusText);
            }
        }
    };
    xhr.open('GET', `languages/${language}.json`, true);
    xhr.send();
}


    function applyTranslations(language) {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute('data-translate');
            element.textContent = translations[language][translationKey] || '';
        });
    }

    toggleButton.addEventListener('click', function () {
        if (currentLanguage === 'english') {
            currentLanguage = 'chinese';
        } else {
            currentLanguage = 'english';
        }

        applyTranslations(currentLanguage);
    });

    // Initial translation
    loadLanguage(currentLanguage);
});
