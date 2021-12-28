export function getTheme() {
    let theme = localStorage.getItem('theme') || null;

    if (theme === null) {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        return prefersDarkScheme.matches;
    }

    if (theme === 'dark') {
        return true;
    }
    return false;
}

export function setTheme(theme) {
    localStorage.setItem('theme', theme);
}