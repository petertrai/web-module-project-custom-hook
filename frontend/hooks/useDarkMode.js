import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initalValue => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initalValue);
    return [darkMode, setDarkMode];
};