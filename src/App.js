import { React, useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { ContactProvider } from './contexts/ContactProvider';
import { ConversationProvider } from './contexts/ConversationProvider';


function App() {

  const [id, setId] = useLocalStorage('userID', '');

  // Chat Modal
  const [chatModal, setChatModalShow] = useState(false);
  const showChatModal = () => setChatModalShow(true);
  const closeChatModal = () => setChatModalShow(false);

  const dashboardProvider = (
    <ContactProvider>
      <ConversationProvider userID={id}>
        <Dashboard userID={id} onLogout={setId} chatModal={chatModal} />
      </ConversationProvider>
    </ContactProvider>
  );

  return (
    <div className="">
      {id ? dashboardProvider : <Login onIdSubmit={setId} />}
    </div>

  );
}

export default App;
