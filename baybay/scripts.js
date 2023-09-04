// JavaScript for Language Translation
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-language-button');
    let currentLanguage = 'english'; // Default language

    // Function to load and apply translations
    function loadTranslations(language) {
        const langPath = `languages/${language}.json`; // Define the path to language files

        fetch(langPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load language file: ${langPath}`);
                }
                return response.json();
            })
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
