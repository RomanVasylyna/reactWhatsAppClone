import React, { useContext } from 'react';
// Просто импортим контекст как функциональный компонент
import ThemeContext from '../App';

const FunctionContextComponent = () => {

    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
    width: '200px',
    height: '100px',
    paddingTop: '5vh',
    textAlign: 'center',
    backgroundColor: darkTheme ? '#303030' : 'lightgray',
    color: darkTheme ? '#fff' : 'lightgreen'
    };

    return (
        <div style={themeStyles}>Theme</div>
    )
}

export default FunctionContextComponent
