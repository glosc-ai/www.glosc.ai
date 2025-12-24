type Theme = "dark" | "light";

const STORAGE_KEY = "glosc-theme";

const isDark = ref(true);
let initialized = false;

function readStoredTheme(): Theme | null {
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        if (value === "dark" || value === "light") return value;
        return null;
    } catch {
        return null;
    }
}

function applyTheme(theme: Theme) {
    const dark = theme === "dark";
    isDark.value = dark;
    document.documentElement.classList.toggle("dark", dark);
    try {
        window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // ignore
    }
}

function initTheme() {
    if (initialized) return;
    initialized = true;

    const stored = readStoredTheme();
    if (stored) {
        applyTheme(stored);
        return;
    }

    // Default theme: dark
    isDark.value = true;
    document.documentElement.classList.add("dark");
    try {
        window.localStorage.setItem(STORAGE_KEY, "dark");
    } catch {
        // ignore
    }
}

export function useTheme() {
    if (typeof window !== "undefined") {
        initTheme();
    }

    function setTheme(theme: Theme) {
        applyTheme(theme);
    }

    function toggleTheme() {
        applyTheme(isDark.value ? "light" : "dark");
    }

    return {
        isDark,
        setTheme,
        toggleTheme,
    };
}
