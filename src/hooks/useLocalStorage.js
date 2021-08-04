// Import react basic hooks
import { useState, useEffect } from 'react';

// Prefix that indicates that this localStorage value belongs to this project
const PREFIX = 'whatsapp-clone-';


// Getting value from localStorage
const getVal = (key, initValue) => {

    // Getting Value from localStorage
    const storageItem = JSON.parse(localStorage.getItem(key));

    // If item exists function should return it otherwise return default value
    // Default value as well as keyname can be set inside custom hook's initial values
    return storageItem ? storageItem : initValue;

    return initValue;

}


export default function useLocalStorage(key, initValue) {

    // Combining prefix and custom key
    const prefixedKey = PREFIX + key;

    // In the useState we call a getVal function that gets items from localStorage
    // and sets them as default
    const [value, setValue] = useState(() => getVal(prefixedKey, initValue));

    // As soon as component renders the value is going to added to localStorage
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [value])

    return [value, setValue]; // simulating the behaviour of useState

}
