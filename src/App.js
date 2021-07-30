import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  // Because we're not using redux for the app, it is wise to store all states in
  // app component so that it can be easily passed to children components as props
  const [id, setId] = useLocalStorage('userID', '');

  console.log(id);

  return (
    <div className="mt-5">
      {id ? <Dashboard userID={id} onLogout={setId} /> : <Login onIdSubmit={setId} />}
    </div>

  );
}

export default App;
