import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore("ThemeStore", () => {
  const theme = ref("light");

  const setTheme = (newTheme) => {
    theme.value = newTheme;
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const initializeTheme = () => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } else {
      setTheme('light');
    }
  };

  return { theme, toggleTheme, initializeTheme };
});
