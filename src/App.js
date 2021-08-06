import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { ContactProvider } from './contexts/ContactProvider';


function App() {

  const [id, setId] = useLocalStorage('userID', '');

  const dashboardProvider = (
    <ContactProvider>
      <Dashboard userID={id} onLogout={setId}/>
    </ContactProvider>
  );

  return (
    <div className="mt-1">
      {id ? dashboardProvider : <Login onIdSubmit={setId} />}
    </div>

  );
}

export default App;
