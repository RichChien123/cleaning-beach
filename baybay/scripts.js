document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-language-button');
    let currentLanguage = 'english'; // Default language

    const translations = {
        'english': {},
        'chinese': {}
    };

    function loadLanguage(language) {
        fetch(`languages/${language}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load language file');
                }
                return response.json();
            })
            .then(data => {
                translations[language] = data;
                applyTranslations(language);
            })
            .catch(error => {
                console.error('Error loading language file:', error);
            });
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
