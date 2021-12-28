export function getTheme() {
    const windowGlobal = typeof window !== 'undefined' && window;
    let theme = windowGlobal.localStorage.getItem('theme') || null;

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
    const windowGlobal = typeof window !== 'undefined' && window
    windowGlobal.localStorage.setItem('theme', theme);
}