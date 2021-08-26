import React from 'react';
import SideBar from '../components/SideBar';
import OpenConversation from '../components/OpenConversation';

const Dashboard = ({ userID, onLogout }) => {


    return (
        <div style={{ display: 'flex' }}>
            <SideBar userID={userID} onLogout={onLogout}/>
            <OpenConversation />
        </div>
    )
}

export default Dashboard
