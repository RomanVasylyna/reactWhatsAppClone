import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';

const SideBar = ({ userID }) => {

    const CONVERSATIONS_KEY = 'conversations';
    const CONTACTS_KEY = 'contacts';

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    
    return (
        <div style={{ width: '250px'}} className="d-flex flex-column">
         <Tab.Container activeKey={activeKey}>
         <Nav variant="tabs" className="justify-content-center">
             <Nav.Item>
                 <Nav.Link eventKey={CONVERSATIONS_KEY} onClick={() => setActiveKey(CONVERSATIONS_KEY)}>
                     Conversations
                 </Nav.Link>
             </Nav.Item>

             <Nav.Item>
                 <Nav.Link eventKey={CONTACTS_KEY} onClick={() => setActiveKey(CONTACTS_KEY)}>
                     Contacts
                 </Nav.Link>
             </Nav.Item>

         </Nav>
         
         {/* Content Inside Tabs*/}
         <Tab.Content>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>

          </Tab.Pane>
         </Tab.Content>

         </Tab.Container>
        </div>
    )
}

export default SideBar
