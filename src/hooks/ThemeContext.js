// Импортируем основные хуки из реакта
import React, { useState, useContext } from 'react';

// Создаем новый контекст
const ThemeContext = React.createContext();
const UpdatedThemeContext = React.createContext();

// Создаем Хуки для манипуляции контекстом
export const useTheme = () => {
    return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
    return useContext(UpdatedThemeContext);
};

// Экспортируем ThemeProvider (wrapper для всех компонентов)
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    return (
        <ThemeProvider value={theme}>
            <UpdatedThemeContext value={toggleTheme}>
                {children}
            </UpdatedThemeContext>
        </ThemeProvider>
    )
}