import React from 'react';
import { Button } from 'react-bootstrap';
// Импортируем хуки из глобального кастомного хука ThemeContext
import { useTheme, useThemeUpdate } from '../hooks/ThemeContext';

const FunctionContextComponent = () => {

    // Получаем данные из кастомных хуков
    const theme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        width: '250px',
        margin: 'auto',
        height: '120px',
        paddingTop: '6vh',
        fontSize: '1.2rem',
        marginTop: '10vh',
        textAlign: 'center',
        backgroundColor: theme ? '#303030' : 'lightgray',
        color: theme ? '#fff' : 'black'
    };

    return (
        <>
        <Button variant="danger" className="mt-3" onClick={toggleTheme}>Toggle Theme</Button>
        <div style={themeStyles}>Theme</div>
        </>
    )
}

export default FunctionContextComponent
