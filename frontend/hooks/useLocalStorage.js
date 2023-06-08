import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });
    const setStoredData = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    };

    return ([state, setStoredData]);
}