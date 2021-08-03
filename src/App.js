import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Button } from 'react-bootstrap';
import useLocalStorage from './hooks/useLocalStorage';
import FunctionContextComponent from './components/FunctionContextComponent';
// import { ThemeProvider } from './hooks/ThemeContext';

function App() {

  const [id, setId] = useLocalStorage('userID', '');


  return (
    // <div className="mt-1">
    <div className="mx-auto text-center">

      <FunctionContextComponent />


      {/*
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider> */}


      {/* {id ? <Dashboard userID={id} onLogout={setId} /> : <Login onIdSubmit={setId} />} */}
      {/* </div> */}
    </div>

  );
}

export default App;
