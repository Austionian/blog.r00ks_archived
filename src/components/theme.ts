/**
 * Checks if the theme has already been set or it the browser
 * has a default to supply.
 * @returns (bool) True for dark; False for light.
 */
export function getTheme() {
    let theme = null;
    // Check if the theme was set already in local storage.
    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('theme');
    }

    // If not in local storage, check for the browser preset.
    if (theme === null) {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        return prefersDarkScheme.matches;
    }

    if (theme === 'dark') {
        return true;
    }
    return false;
}

/**
 * Sets a theme when explicity choosen in local storage.
 * @param theme (str) light or dark theme to be set.
 */
export function setTheme(theme) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
    }
}