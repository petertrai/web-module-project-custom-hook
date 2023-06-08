import { useState } from "react";

export const useDarkMode = initalValue => {
    const [darkMode, setDarkMode] = useState(initalValue);
    return [darkMode, setDarkMode];
};