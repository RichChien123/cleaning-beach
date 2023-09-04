document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-language-button');
    let currentLanguage = 'english'; // Default language

    // Function to load and apply translations
    function loadTranslations(language) {
        let url;
        if (language === 'chinese') {
            url = 'https://github.com/RichChien123/cleaning-beach/raw/main/baybay/languages/chinese.json';
        } else {
            url = 'https://github.com/RichChien123/cleaning-beach/raw/main/baybay/languages/english.json';
        }

        fetch(url)
            .then(response => response.json())
            .then(data => applyTranslations(data))
            .catch(error => {
                console.error('Error loading language file:', error);
            });
    }

    // Function to apply translations to elements with data-translate attribute
    function applyTranslations(data) {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute('data-translate');
            if (data.hasOwnProperty(translationKey)) {
                element.textContent = data[translationKey];
            }
        });
    }

    // Toggle language when the button is clicked
    toggleButton.addEventListener('click', function () {
        if (currentLanguage === 'english') {
            currentLanguage = 'chinese';
        } else {
            currentLanguage = 'english';
        }

        // Load and apply translations for the selected language
        loadTranslations(currentLanguage);
    });

    // Initial translation
    loadTranslations(currentLanguage);
});
