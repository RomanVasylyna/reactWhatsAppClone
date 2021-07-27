import { useState, useEffect } from 'react';

// key is the item that will be stored in localStorage
// this function helps us get key item from localStorage
// localStorage only stores info in the JSON format
// JSON.parse turns string that we receive from localStorage into JS object
// JSON.stringify turns JS object into a string so that it could be stored in ls
const getSavedValue = (key, initialVal) => {
    const savedVal = JSON.parse(localStorage.getItem(key));

    // If we have saved smth in the LS then get this stuff from LS
    // If the data was not saved in the LS then default value should prevail
    return savedVal ? savedVal : initialVal;

    // Here we check if initVal is a function or not
    return initialVal instanceof Function ? initialVal() : initialVal;
}


// Exporting the custom hook
export default function useLocalStorage(key, initialVal) {
    // Here we're going to create a custom hook
    // Custom hook's name should start with use

    const [value, setValue] = useState(() => getSavedValue(key, initialVal));


    // In the useEffect hook we are setting a value to locaStorage
    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    }, [value])


    return [value, setValue] // This is going to replicate the behaviour of useState
}
