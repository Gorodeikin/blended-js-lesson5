import { refs } from './refs.js';

const THEME_DARK = 'theme-dark';
const THEME_LIGHT = 'theme-light';
const STORAGE_KEY = 'theme';

export function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(THEME_LIGHT);
    }
    refs.themeToggleBtn.addEventListener('click', toggleTheme);
}

function setTheme(theme) {
    refs.body.classList.remove(THEME_LIGHT, THEME_DARK);
    refs.body.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
}

function toggleTheme() {
    if (refs.body.classList.contains(THEME_LIGHT)) {
        setTheme(THEME_DARK);
    } else {
        setTheme(THEME_LIGHT);
    }
}