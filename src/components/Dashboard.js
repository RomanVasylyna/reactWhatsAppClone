import React from 'react';
import SideBar from '../components/SideBar';
import OpenConversation from '../components/OpenConversation';
import { useConversation } from '../contexts/ConversationProvider';

const Dashboard = ({ userID, onLogout }) => {

    const { conversations } = useConversation();

    return (
        <div style={{ display: 'flex' }}>
            <SideBar userID={userID} onLogout={onLogout} />
            {conversations.length ? <OpenConversation /> : ''}
        </div>
    )
}

export default Dashboard
