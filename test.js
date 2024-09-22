let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);
    
    // Button click event
    document.getElementById('language-toggle').onclick = changeLang;
});

function changeLang() {
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    localStorage.setItem('selectedLanguage', currentLanguage);
    applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('.multilanguage');

    elements.forEach(element => {
        // Get content for the current language
        const parentContent = element.getAttribute(`data-${lang}`);
        if (parentContent) {
            // Clear the existing text and then set the new content
            element.innerHTML = parentContent; // This replaces everything
        }

        // Update child elements
        const childElements = element.querySelectorAll('.multilanguage');
        childElements.forEach(child => {
            const childContent = child.getAttribute(`data-${lang}`);
            if (childContent) {
                child.textContent = childContent; // Update child text content
            }
        });
    });
}