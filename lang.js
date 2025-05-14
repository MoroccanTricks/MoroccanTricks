function setLanguage(lang) {
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
        });
}
