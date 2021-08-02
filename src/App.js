import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Button } from 'react-bootstrap';
import useLocalStorage from './hooks/useLocalStorage';
import FunctionContextComponent from './components/FunctionContextComponent';

// Создаем контекст + делаем импортируемым
export const ThemeContext = React.createContext();

function App() {

  const [id, setId] = useLocalStorage('userID', '');

  // Стейт темы
  const [darkTheme, setDarkTheme] = useState(true);

  // Тогглим тему
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  };

  return (
    // <div className="mt-1">
    <div className="mx-auto text-center">

      <ThemeContext.Provider value={darkTheme}>
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <FunctionContextComponent />
      </ThemeContext.Provider>

      {/* {id ? <Dashboard userID={id} onLogout={setId} /> : <Login onIdSubmit={setId} />} */}
      {/* </div> */}
    </div>

  );
}

export default App;
