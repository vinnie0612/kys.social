import { writable } from 'svelte/store';

export const darkMode = writable(true);

export const toggleDarkMode = () => {
  darkMode.update((val) => !val);
};