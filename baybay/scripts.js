document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('change-language-button');
    let currentLanguage = 'english'; // Default language
    const chineseURL = 'https://github.com/RichChien123/cleaning-beach/raw/ff65c2fe7f7db6d4a1a95bfaf9bbf956c9f9580c/baybay/languages/chinese.json';
    const englishURL = 'https://github.com/RichChien123/cleaning-beach/raw/ff65c2fe7f7db6d4a1a95bfaf9bbf956c9f9580c/baybay/languages/english.json';

    // Function to load and apply translations
    function loadTranslations(language) {
        const languageURL = language === 'english' ? englishURL : chineseURL;
        fetch(languageURL)
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
