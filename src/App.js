import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [id, setId] = useLocalStorage('userID', '');

  return (
    <div className="mt-1">
      {id ? <Dashboard userID={id} onLogout={setId} /> : <Login onIdSubmit={setId} />}
    </div>

  );
}

export default App;
